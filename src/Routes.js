import makeRouteConfig from 'found/lib/makeRouteConfig'
import Route from 'found/lib/Route'
import React from 'react'
import {graphql} from 'react-relay'

import App from './Components/App'

const query = graphql`
query routes_App_Query {
  viewer {
    ...Layout_viewer
    ...WidgetList_viewer
  }
}`

export default makeRouteConfig(
  <Route path="/" Component={App} query={query} />,
)
