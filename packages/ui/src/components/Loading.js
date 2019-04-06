import React from 'react';
import { Flex, Spinner } from '../index';

const Loading = () => {
  return (
    <Flex alignItems="center" justifyContent="center" fullHeight>
      <Spinner />
    </Flex>
  );
};

export default Loading;
