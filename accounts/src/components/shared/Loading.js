import React from 'react';
import { Flex, Spinner } from '@jobel/ui';

const Loading = () => {
  return (
    <Flex alignItems="center" justifyContent="center" fullHeight>
      <Spinner />
    </Flex>
  );
};

export default Loading;
