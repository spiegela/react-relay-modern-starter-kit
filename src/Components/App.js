import React, {Component} from 'react'
import withRouter from 'found/lib/withRouter'
import Layout from './Layout'

class App extends Component {

  componentWillMount() {
    this.props.route.auth.on('logged_in', this.redirectToRoot.bind(this))
  }

  redirectToRoot() {
    this.props.router.push("/")
  }

  redirectToLogin() {
    this.props.router.push("/login")
  }

  render() {
    const {children, viewer, route} = this.props
    return(
      <Layout viewer={viewer} auth={route.auth} >
        {children}
      </Layout>
    );
  }
}

export default withRouter(App)
