import React, {Component} from 'react'
import {
  graphql,
  QueryRenderer
} from 'react-relay'

import environment from '../Environment'
import Layout from './Layout'
import WidgetList from './WidgetList'

const query = graphql`
query AppQuery {
  viewer {
    ...Layout_viewer
    ...WidgetList_viewer
  }
}`

export default class App extends Component {
  render() {
    return(
      <QueryRenderer
      environment={environment}
      query={query}
      render={
        ({error, props}) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <Layout viewer={props.viewer}>
                <WidgetList viewer={props.viewer}/>
              </Layout>
            );
          } else {
            return(
              <div>Loading....</div>
            );
          }
        }
      }
      />
    );
  }
}
