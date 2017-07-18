import React, {Component} from 'react'
import {
  graphql,
  createFragmentContainer
} from 'react-relay'

import DrawerTypes from 'react-md/lib/Drawers/DrawerTypes'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'

class Layout extends Component {
  render() {
    return(
      <NavigationDrawer
        toolbarTitle="Widget List"
        drawerTitle="NavigationMenu"
        desktopDrawerType={DrawerTypes.CLIPPED}
      >
        {this.props.children}
      </NavigationDrawer>
    )
  }
}

const layoutContainer = createFragmentContainer(Layout, {
  viewer: graphql`
    fragment Layout_viewer on User {
      id
      name
    }
  `
})

export default layoutContainer
