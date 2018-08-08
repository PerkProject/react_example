import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import TextBox from './TextBox'
import Price from './Price'

class ProductCard extends React.Component {
  render() {
    const { image, title, price } = this.props

    return (
      <div>
        <Image {...image} />
        <TextBox>
          {title}
        </TextBox>
        <Price price={price} />
      </div>
    )
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.objectOf(Image.propTypes)
  })
}

ProductCard.defaultProps = {
  product: {
    id: 1,
    title: 'Product',
    price: 11500,
    url: '',
    width: '200',
    height: '200',
    alt: 'product'
  }
}

export default ProductCard
