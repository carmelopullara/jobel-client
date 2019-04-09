import { useContext } from 'react';
import { UserContext, APP_URL, PORTAL_URL } from 'context';

const Home = () => {
  const { state: { currentUser } } = useContext(UserContext);
  if (currentUser.type === 'JobSeeker') {
    window.location = PORTAL_URL;
  } else {
    window.location = APP_URL;
  }
  return null;
};

export default Home;
