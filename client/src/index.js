import { StrictMode } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

const app = (
  <StrictMode>
    <App />
  </StrictMode >
)

const root = document.getElementById('root')

render(app, root);


