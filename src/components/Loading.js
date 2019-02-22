import React from 'react';

const Loading = () => {
  const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    color: '#fff',
  };

  return (
    <div style={style}>
      loading...
    </div>
  );
};

export default Loading;
