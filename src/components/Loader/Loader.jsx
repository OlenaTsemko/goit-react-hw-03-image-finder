import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import RingLoader from 'react-spinners/RingLoader';
import { css } from '@emotion/core';

const loader = css`
  display: block;
  margin: 0 auto;
`;

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8);

const Loader = ({ loading }) => {
  const [color, setColor] = useState(randomColor());

  useEffect(() => setColor(randomColor()), [loading]);

  return loading && <RingLoader color={color} css={loader} />;
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loader;
