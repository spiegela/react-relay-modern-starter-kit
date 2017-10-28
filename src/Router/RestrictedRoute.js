import {RedirectException} from 'found'

export default class RestrictedRoute {

  constructor(props) {
    if (props === null) {
      return null
    }
    Object.assign(this, props)
    const auth = props.auth
    this.prerender = ({props}) => {
      if (typeof auth === "undefined" || auth === null || ! auth.isLoggedIn()) {
        throw new RedirectException({pathname: '/login'})
      }
    }
  }
}
