import { Navigate } from 'react-router-dom';
import { Home } from './../pages/Home/Home';

type AuthProps = {
  children: React.ReactNode;
  location: string;
};

/**
 * 
 * @param param0 
 * @returns 
 */
export const Auth = ({ children, location }: AuthProps) => {
  const isLog = localStorage.getItem('isLog');

  return isLog == 'true' ? children : <Navigate to={location} />;
};
