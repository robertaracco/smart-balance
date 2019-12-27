import React from 'react';
// import PropTypes from 'prop-types';
import { Wrapper, Text } from './styles';

function HomePage() {
  return (
    <Wrapper>
      <Text>{'Welcome to\nSmartBalance!'}</Text>
    </Wrapper>
  );
}

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
