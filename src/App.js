import { useState, useEffect } from 'react';

import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Notice from 'components/Notice';
import ErrorNotice from 'components/ErrorNotice';
import Modal from 'components/Modal';

import imagesApi from 'services/imagesApi';

import './App.scss';

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState('');
  const [renderBtn, setRenderBtn] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [largeImageAlt, setLargeImageAlt] = useState('');

  const pageSize = 12;

  useEffect(() => {
    const fetchImages = () => {
      const options = { searchQuery, currentPage, pageSize };

      setLoading(true);

      imagesApi
        .fetchGetImages(options)
        .then(({ hits, totalHits }) => {
          if (totalHits === 0) {
            setNotice(`Images with '${searchQuery}' not found!`);
            return;
          }

          if (totalHits <= pageSize || hits.length < pageSize) {
            setRenderBtn(false);
          }

          setImages(prev => [...prev, ...hits]);

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    };

    searchQuery ? fetchImages() : setImages([]);
  }, [currentPage, searchQuery]);

  const handleButtonLoadMoreClick = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handleChangeValue = query => {
    if (searchQuery !== query) {
      setNotice('');
      setRenderBtn(true);
      setError(null);
      setSearchQuery(query);
      setCurrentPage(1);
      setImages([]);
    }
  };

  const handleModal = event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }

    setLargeImageUrl(event.target.dataset.largeImage);
    setLargeImageAlt(event.target.alt);

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const shouldRenderBtn = images.length > 0 && renderBtn && !loading;

  return (
    <div className="App">
      <Searchbar onSubmit={handleChangeValue} />
      <ErrorNotice error={error} />
      <Notice notice={notice} />
      <ImageGallery images={images} onClick={handleModal} />

      {showModal && (
        <Modal
          largeImageUrl={largeImageUrl}
          largeImageAlt={largeImageAlt}
          onClose={closeModal}
        />
      )}

      <Loader loading={loading} />
      <Button
        onButtonClick={handleButtonLoadMoreClick}
        shouldRenderBtn={shouldRenderBtn}
      />
    </div>
  );
};

export default App;
