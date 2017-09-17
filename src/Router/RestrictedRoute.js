import {RedirectException} from 'found'
export default class AuthenticatedRoute {

  constructor(props) {
    Object.assign(this, props)

    this.prerender = ({props}) => {
      if (
        typeof props.auth === "undefined" ||
            props.auth === null ||
              ! props.auth.loggedIn()
      ) {
        throw new RedirectException('/login')
      }
    }
  }

}
