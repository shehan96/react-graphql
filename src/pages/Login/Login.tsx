import { Navigate } from 'react-router-dom';

export const Login = () => {
  const login = () => {
    localStorage.setItem('isLog', 'true');
    Navigate({ to: '/', replace: true });
  };

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={login}>Login</button>
    </>
  );
};
