import React, {Component} from 'react'
import Paper from 'react-md/lib/Papers'
import withRouter from 'found/lib/withRouter'

import Router from '../Router'

export default class Login extends Component {

  handleLogin() {
    this.props.auth.displayPrompt()
  }

  render() {
    const style = {
      margin: '2em',
      marginTop: '8em',
      padding: '1em',
    }
    return(
      <Paper style={style} zDepth={2}>
        <h4>
          <a href="#" onClick={this.handleLogin.bind(this)}>Login or register</a> to
            continue.
        </h4>
      </Paper>
    )
  }
}
