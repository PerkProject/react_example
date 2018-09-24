import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { commonUrl } from '~/src/helpers/routes/api';

import { Media } from 'reactstrap';

const Image = ({ url, alt, width, height }) => (
    
  <Fragment>
  <Media object
        src={commonUrl(url)}
        width={width}
        height={height}
        alt={alt} />
  </Fragment>
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