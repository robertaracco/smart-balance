import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

function SearchDevice({ className }) {
  return (
    <Wrapper className={className} />
  );
}

SearchDevice.propTypes = {
  className: PropTypes.string,
};

SearchDevice.defaultProps = {
  className: '',
};

export default SearchDevice;
