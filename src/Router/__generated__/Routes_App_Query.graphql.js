/**
 * @flow
 * @relayHash 26a35c9eb8bf5f10cfb1057ce1cc9296
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type Routes_App_QueryResponse = {|
  +viewer: ?{| |};
|};
*/


/*
query Routes_App_Query {
  viewer {
    ...Layout_viewer
    id
  }
}

fragment Layout_viewer on User {
  id
  name
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Routes_App_Query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Layout_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "Routes_App_Query",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "Routes_App_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query Routes_App_Query {\n  viewer {\n    ...Layout_viewer\n    id\n  }\n}\n\nfragment Layout_viewer on User {\n  id\n  name\n}\n"
};

module.exports = batch;
