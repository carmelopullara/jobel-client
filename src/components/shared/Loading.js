import React from 'react';
import { FullScreenSection } from 'styled/layout';
import Spinner from 'styled/spinner';

const Loading = () => {
  return (
    <FullScreenSection>
      <Spinner />
    </FullScreenSection>
  );
};

export default Loading;
