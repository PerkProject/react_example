import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Modal from '~/src/components/elements/Modal';
import Basket from './Basket';

class BasketModal extends Component {
  render() {
    return (
      <Modal {...this.props}>
        <BasketContainer />
      </Modal>
    );
  }
}

BasketModal.propTypes = {
  history: PropTypes.object,
  className: PropTypes.string
};

export default BasketModal;