import React, {Component} from 'react'
import Avatar from 'react-md/lib/Avatars'
import DropdownMenu from 'react-md/lib/Menus/DropdownMenu'

class ProfileMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      profile: props.auth.getProfile(),
      open: false
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
    this.menuItems = this.menuItems.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  menuItems() {
    const {name, email, picture} = this.state.profile
    if (typeof name !== "undefined" && name !== null) {
        return [
        {
          key: 1,
          primaryText: name,
          secondaryText: email,
          leftAvatar: <Avatar src={picture}/>,
          active: false,
        },
        {
          key: 2,
          primaryText: 'Logout',
          itemProps: {role: 'button'},
          onClick: this.handleLogout,
        }
      ]
    } else {
      return []
    }
  }

  handleLogout() {
    this.props.auth.logout()
  }

  render() {
    const {profile} = this.state
    const {auth} = this.props
    const avatarStyle = {marginTop: '.5em'}
    return(
      <div>
        {auth.isLoggedIn() &&
          <DropdownMenu
            id="profile-menu"
            menuItems={this.menuItems()}
            //position={DropdownMenu.Positions.BOTTOM_RIGHT}
          >
            <Avatar style={avatarStyle} src={profile.picture}/>
          </DropdownMenu>
        }
        {! auth.isLoggedIn() &&
          <Button>Login</Button>
        }
      </div>

    )
  }
}

export default ProfileMenu
