import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import { theme } from './theme'
import { loginUser, logoutUser } from './lib/identityActions'
import {
  Box,
  Grommet
} from 'grommet'
import { Menu } from 'grommet-icons'
import netflifyIdentity from 'netlify-identity-widget'

import {
  AppHeader
} from './components'
import { Homepage, NotFound } from './pages'

class App extends Component {
  componentDidMount() {
    const user = localStorage.getItem('currentUser')
    if (user) {
      this.setState({ user: JSON.parse(user) })
    } else {
      loginUser()
    }

    netflifyIdentity.on('login', user => this.setState({ user }, loginUser()))
    netflifyIdentity.on('logout', user => this.setState({ user: null }, logoutUser()))
  }

  handleLogin = () => {
    netflifyIdentity.open()
  }

  handleLogout = () => {
    netflifyIdentity.logout()
  }

  render() {
    return (
      <Router>
        <Grommet theme={theme} full>
          <Box fill background="light-3">
            <AppHeader
              appName="Nicks App"
              appIcon={<Menu />}
              currentUser={this.state.currentUser}
              handleLogin={this.handleLogin}
              handleLogout={this.handleLogout}
            />
            <Box flex>
              <Switch>
                <Route path='/' exact component={Homepage} />
                <Route component={NotFound} />
              </Switch>
            </Box>
          </Box>
        </Grommet>
      </Router>
    )
  }
}

netflifyIdentity.init()
render(<App />, document.getElementById('root'))
serviceWorker.unregister()
