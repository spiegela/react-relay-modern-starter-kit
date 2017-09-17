import React, {Component} from 'react'
import {
  graphql,
  QueryRenderer
} from 'react-relay'
import Layout from './Layout'
import WidgetList from './WidgetList'

export default class App extends Component {
  render() {
    return(
        <Layout viewer={this.props.viewer}>
          {this.props.children}
        </Layout>
      );
  }
}
