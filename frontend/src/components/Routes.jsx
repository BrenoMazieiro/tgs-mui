import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  HomePage, SignInPage, SignUpPage, Dashboard, ValidateUserPage,
} from 'components'

const Routes = () => {
  return (
    <Switch id="Routes">
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/signin">
        <SignInPage />
      </Route>
      <Route exact path="/signup">
        <SignUpPage />
      </Route>
      <Route exact path="/validateuser/:token">
        <ValidateUserPage />
      </Route>
      {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  )
}

export default Routes
