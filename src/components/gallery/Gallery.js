import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Card, CardImg, CardBody } from 'reactstrap';
import { map, isEmpty } from 'lodash';

import { commonUrl } from '~/src/helpers/routes/api';
import { imagePath } from '~/src/helpers/routes/common';
import Link from '~/src/components/elements/Link';
import Thumbnails from './Thumbnails';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 }
  }
  componentDidMount() {
    const { fetchImages, fetchImagesById } = this.props;
    const { id } = this.props.match.params;
    
    if (id) {
      fetchImagesById(id);
    } else {
      fetchImages()
    }
}
  componentWillReceiveProps(nextProps) {
    const step = 3;
    const { secondsPassed } = this.props;
    if (secondsPassed % step === 0) {
      this.goNext();
    }
}

  render() {
    const { items: images, cardWidth } = this.props;
    
    if (isEmpty(images)) { return null; }
    
    const { activeIndex } = this.state; 
    const { id, mainUrl } = images[activeIndex];

    return (
        <Card className="mx-auto">
          <Link to={imagePath(id)}>
            <CardImg top src={commonUrl(mainUrl)} width={cardWidth}/>
          </Link>
          <CardBody className="mx-auto">
            <ul className='list-inline'>
            {
              map(
                images, Thumbnails(index, activeIndex)
              )
            }
            </ul>
          </CardBody>
        </Card>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array,
  cardWidth: PropTypes.string
};

Gallery.defaultProps = {
  images: [],
  cardWidth: "100%"
};

export default Gallery;