import React from 'react';
import { Flex } from 'styled/layout';
import Spinner from 'styled/spinner';

const Loading = () => {
  return (
    <Flex alignItems="center" justifyContent="center" fullHeight>
      <Spinner />
    </Flex>
  );
};

export default Loading;
