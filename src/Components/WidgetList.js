import React, {Component} from 'react';
import {
  graphql,
  createFragmentContainer
} from 'react-relay';

import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Subheader from 'react-md/lib/Subheaders';

class WidgetList extends Component {

  renderWidgets() {
    return this.props.viewer.widgets.edges.map(edge =>
      <ListItem key={edge.node.id} primaryText={edge.node.name} />
    )
  }

  render() {
    return(
      <List>
        <Subheader primaryText="Widgets" />
        {this.renderWidgets()}
      </List>
    )
  }
}

const widgetListContainer = createFragmentContainer(WidgetList, {
  viewer: graphql`
    fragment WidgetList_viewer on User {
      widgets(first:3) @connection(key: "WidgetList_widgets") {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `
});

export default widgetListContainer;
