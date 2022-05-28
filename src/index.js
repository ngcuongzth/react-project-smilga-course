import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';


// domain : dev-tbhj3lao.us.auth0.com
//  clientId pTeGwzFftoydeeoBpZu0MkTtK2xADOCh



import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-tbhj3lao.us.auth0.com"
      clientId="pTeGwzFftoydeeoBpZu0MkTtK2xADOCh"
      redirectUri={window.location.origin}
      cacheLocation='localstorage'>
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
