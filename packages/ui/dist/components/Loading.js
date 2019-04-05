import React from 'react';
import { Flex, Spinner } from '../index';

const Loading = () => {
  return React.createElement(Flex, {
    alignItems: "center",
    justifyContent: "center",
    fullHeight: true
  }, React.createElement(Spinner, null));
};

export default Loading;