import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Media } from 'reactstrap';
import { commonUrl } from '~/src/helpers/routes/api';

const Image = ({ path }) => (
  <Container>
      <Media object
        src={commonUrl(path)}
      />
  </Container>
);

Image.propTypes = {
  path: PropTypes.string
};

Image.defaultProps = { 
  path: '/'
};

export default Image;