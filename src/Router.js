import React, {Component} from 'react'
import BrowserProtocol from 'farce/lib/BrowserProtocol'
import queryMiddleware from 'farce/lib/queryMiddleware'
import createFarceRouter from 'found/lib/createFarceRouter'
import createRender from 'found/lib/createRender'
import {Resolver} from 'found-relay'

import Routes from './Routes'
import environment from './Environment'

const FarceRouter = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: Routes,
  render: createRender({}),
})

export default class Router extends Component {
  render() {
    return(
      <FarceRouter resolver={new Resolver(environment)}/>
    )
  }
}
