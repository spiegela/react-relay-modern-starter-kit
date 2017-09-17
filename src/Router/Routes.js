import makeRouteConfig from 'found/lib/makeRouteConfig'
import Route from 'found/lib/Route'
import React from 'react'
import {graphql} from 'react-relay'

import RestrictedRoute from './RestrictedRoute'

import App from '../Components/App'
import Login from '../Components/Login'
import WidgetList from '../Components/WidgetList'

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

export default makeRouteConfig(
  <Route path="/" Component={App} query={appQuery}>,
    <RestrictedRoute Component={WidgetList} query={widgetsQuery}/>,
    <Route path="/login" Component={Login} />,
  </Route>
)
