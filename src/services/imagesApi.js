import axios from 'axios';

const API_KEY = '19750317-f167cae8029dbba7a5b9e2fed';
axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchGetImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) =>
  axios
    .get(
      `/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(responce => responce.data);

export default { fetchGetImages };
