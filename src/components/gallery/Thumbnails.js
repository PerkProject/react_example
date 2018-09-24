import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PreviewImage from './PreviewImage';

const Thumbnails = ({ thumbUrl }, index, activeIndex) => (
    <Fragment>
    <li className='list-inline-item' key={`${index}`}>
        <PreviewImage 
        path={thumbUrl} 
        onClick={() => activeIndex.setState(index)}
        />
    </li>
    </Fragment>
)

Thumbnails.propTypes = {
  thumbUrl: PropTypes.string,
  index: PropTypes.string
};

Thumbnails.defaultProps = {
  thumbUrl: '/',
  index: '/'
};

export default Thumbnails;