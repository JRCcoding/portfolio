import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Auth0Provider
    domain='dev-dstps3q4l34f7d23.us.auth0.com'
    clientId='N5jCTC0DofYRPTr6PKJUmGWSI9llXEmh'
    authorizationParams={{
      //  Redirect for production
      redirect_uri: 'https://josh-claxton.com/admin/new',

      //  Redirect for development
      // redirect_uri: 'http://localhost:3000/admin/new',

      //  This line forces login each time, otherwise auto login after first.
      // prompt: 'login',
      audience: 'https://dev-dstps3q4l34f7d23.us.auth0.com/api/v2/',

      scope:
        'read:users read:current_user read:client_grants profile create:current_user_metadata update:current_user_metadata',
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
    }}
  >
    <App />
  </Auth0Provider>
)
