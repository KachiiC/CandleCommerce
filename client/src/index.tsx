import { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const app = (
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN!}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
    redirectUri="http://127.0.0.1:3000/products"
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>
);

const root = document.getElementById('root');

render(app, root);
