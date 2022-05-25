import { Navigate } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  const logout = () => {
    localStorage.clear();
    Navigate({ to: '/login', replace: true });
  };

  return (
    <>
      {' '}
      <h1>Home Page</h1>
      <button onClick={logout}>Log Out</button>
    </>
  );
};
