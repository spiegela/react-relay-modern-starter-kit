import React, {Component} from 'react'
import {graphql} from 'react-relay'
import BrowserProtocol from 'farce/lib/BrowserProtocol'
import queryMiddleware from 'farce/lib/queryMiddleware'
import createFarceRouter from 'found/lib/createFarceRouter'
import createRender from 'found/lib/createRender'
import {Resolver} from 'found-relay'
import makeRouteConfig from 'found/lib/makeRouteConfig'
import Route from 'found/lib/Route'

import AuthService from '../AuthService'
import environment from '../Environment'
import App from '../Components/App'
import Login from '../Components/Login'
import WidgetList from '../Components/WidgetList'

import RestrictedRoute from './RestrictedRoute'

const appQuery = graphql`
query Routes_App_Query {
  viewer {
    ...Layout_viewer
  }
}`

const widgetsQuery = graphql`
query Routes_WidgetList_Query {
  viewer {
    ...WidgetList_viewer
  }
}
`

const auth = new AuthService(
  process.env.AUTH0_CLIENT_ID,
  process.env.AUTH0_DOMAIN
)

const FarceRouter = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: makeRouteConfig(
    <Route auth={auth} path="/" Component={App} query={appQuery} render={
      ({Component, props}) => (
        Component && props ? (
          <Component {...props}/>
        ) : (
          <div><small>Loading...</small></div>
        )
      )
    }>,
      <Route path="/login" Component={Login} />,
      <RestrictedRoute auth={auth} Component={WidgetList} query={widgetsQuery}/>,
    </Route>
  ),
  render: createRender({}),
})

export default class Router extends Component {
  render() {
    return(
      <FarceRouter resolver={new Resolver(environment)}/>
    )
  }
}
