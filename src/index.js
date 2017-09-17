import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import styles from './index.scss'
import Router from './Router'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Router)

if (module.hot) {
  module.hot.accept('./Router', () => { render(Router) })
}
