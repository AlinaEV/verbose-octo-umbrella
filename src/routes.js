import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Home from './components/Home'
import Admin from './components/Admin'
import LoginPage from './containers/LoginPage'
import Maps from './components/Maps'
import Archive from './components/Archive'
import Medcard from './components/Medcard'
import Vet from './components/Vet'
import NotFound from './components/NotFound'
import requireAuthentication from './containers/AuthenticatedComponent'

export const routes = (
  <div>
      <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/admin' component={requireAuthentication(Admin)} />
          <Route path='/login' component={LoginPage} />
          <Route path='/maps' component={Maps}/>
          <Route path='/archive' component={Archive} />
          <Route path='/medcard' component={Medcard} />
          <Route path='/vet' component={Vet} />
      </Route>
      <Route path='*' component={NotFound} />
  </div>
)