import React from 'react';
import { Flex } from 'styled/layout';
import Spinner from 'styled/spinner';

const Loading = () => {
  return (
    <Flex bg="#f7f8fa" alignItems="center" justifyContent="center" fullHeight>
      <Spinner />
    </Flex>
  );
};

export default Loading;
