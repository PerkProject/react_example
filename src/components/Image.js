import React from 'react'
import PropTypes from 'prop-types';

const Image = ({ url, alt, width, height }) => (
    <div>
      <img
        src={url}
        width={width}
        height={height}
        alt={alt} />
    </div>
  );

Image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {
  url: ' ',
  width: '200',
  height: '200',
  alt: 'product'
};

  export default Image;