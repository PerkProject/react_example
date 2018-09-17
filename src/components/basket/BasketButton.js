import React, { Component, Fragment } from 'react';

import CartContext from '~/src/helpers/CartContext';
import Button from '~/src/components/elements/Button';

class BasketButton extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {
          card => {
            const title = `Выбрано заказов: ${card.basket.length}`;

            return (
              <Button>
                {title}
              </Button>
            )
          }
        }
      </CartContext.Consumer>
    );
  }
}

export default BasketButton;