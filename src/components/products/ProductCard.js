import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Media } from 'reactstrap';

import { productsPath } from '~/src/helpers/routes/products';

import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToBasketContainer from '~/src/containers/AddToBasketContainer';
import Link from '~/src/components/elements/Link';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product, isShowProductPage } = this.props;
    const { id, image, title, description, price } = product;
    return (
      <Fragment>
        <Row className='mb-2'>
          <Media>
            <Media className='mr-2' left>
              <Image {...image} />
            </Media>
            <Media body>
              <Media heading>
                <TextBox>
                  {title}
                </TextBox>
              </Media>
              <div>
                <TextBox>
                  {description}
                </TextBox>
              </div>
              <Price price={price} />

              <Container className='mt-3'>
                <Row>
                  <AddToBasketContainer productId={id} />
                </Row>
              </Container>

              {
                !isShowProductPage &&
                  <Container className='mt-3'>
                    <Link to={productsPath(id)}>
                      Подробнее
                    </Link>
                  </Container>
              }
            </Media>
          </Media>
        </Row>
      </Fragment>
    )
  }
}

ProductCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  descriprion: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.shape(Image.propTypes),
  isShowProductPage: PropTypes.bool
};

ProductCard.defaultProps = {
  id: '0',
  title: 'Без названия',
  descriprion: 'noname product',
  price: '11500',
  url: 'http://via.placeholder.com/200x200',
  width: '200',
  height: '200',
  alt: 'Что-то 1',
  image: Image.defaultProps,
  isShowProductPage: false
};

export default ProductCard;