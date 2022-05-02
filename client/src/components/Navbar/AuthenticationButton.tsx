import { useAuth0 } from '@auth0/auth0-react';

interface AuthButtonProps {
  type: string;
}

export const AuthenticationButton = ({ type }: AuthButtonProps) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const typeLogic = type === 'small' ? 'small-nav-link' : 'account-button';

  // Login in and out logic
  const authLogin = () => loginWithRedirect();
  const authLogout = () => logout({ returnTo: 'http://127.0.0.1:3000' });

  const authenticationLogic = isAuthenticated ? 'LOGOUT' : 'LOGIN';

  // If autheticated return logout, if not return login,
  const actionLogic = isAuthenticated ? authLogout : authLogin;

  return (
    <div className={typeLogic} onClick={actionLogic}>
      {authenticationLogic}
    </div>
  );
};

export default AuthenticationButton;
