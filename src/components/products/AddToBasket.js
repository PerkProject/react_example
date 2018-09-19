import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup } from 'reactstrap';

import CartContext from '~/src/helpers/CartContext';

import Button from '~/src/components/elements/Button';

class AddToBasket extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 1 };
  }

  changeCount(type) {
    if (type === 'increment') {
      this.setState((state) => ({ count: state.count + 1 }) );
    } 
    else if (type === 'decrement' && count > 1) {
      this.setState((state) => ({ count: state.count - 1 }) );
    }
  }

  render() {
    const { product } = this.props;
    const { count } = this.state;

    return (
      <CartContext.Consumer>
        {
          card => {
            return (
              <ButtonGroup size='lg'>
                <Button onClick={() => this.changeCount('decrement')}>
                  {'-'}
                </Button>
                <Button onClick={() => card.addToBasket(product, count)}>
                  {`Добавить в корзину: ${count}`}
                </Button>
                <Button onClick={() => this.changeCount('increment')}>
                  {'+'}
                </Button>
              </ButtonGroup>
            )
          }
        }
      </CartContext.Consumer>
    );
  }
}

AddToBasket.propTypes = {
  product: PropTypes.object
};

export default AddToBasket;