import React from 'react';
import { Flex } from 'styled/layout';
import Spinner from 'styled/spinner';
import theme from 'styled/theme';

const Loading = () => {
  return (
    <Flex bg={theme.colors.gray} alignItems="center" justifyContent="center" fullHeight>
      <Spinner />
    </Flex>
  );
};

export default Loading;
