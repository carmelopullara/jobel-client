import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      home
      <br />
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Home;
