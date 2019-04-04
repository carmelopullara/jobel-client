import React from 'react';
import { Flex } from '@jobel/ui/layout';
import Spinner from '@jobel/ui/spinner';

const Loading = () => {
  return (
    <Flex alignItems="center" justifyContent="center" fullHeight>
      <Spinner />
    </Flex>
  );
};

export default Loading;
