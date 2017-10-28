import React, {Component} from 'react'
import {
  graphql,
  createFragmentContainer
} from 'react-relay'
import DrawerTypes from 'react-md/lib/Drawers/DrawerTypes'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'

import ProfileMenu from './ProfileMenu'

class Layout extends Component {

  profileMenu() {
    if (this.props.auth.isLoggedIn()) {
      return <ProfileMenu auth={this.props.auth}/>
    } else {
      return null
    }
  }

  render() {
    const {auth} = this.props
    // copy auth-service to layout children
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: auth
      })
    }
    return(
      <NavigationDrawer
        toolbarTitle="Widget List"
        toolbarActions={this.profileMenu()}
        drawerTitle="NavigationMenu"
        desktopDrawerType={DrawerTypes.CLIPPED}
      >
        {children}
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
