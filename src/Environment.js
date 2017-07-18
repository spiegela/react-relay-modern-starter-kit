import fetch from 'isomorphic-fetch';
import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';

function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables
) {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/graphql',
    },
    body: operation.text
  }).then(response => {
    return response.json();
  });
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);
const source = new RecordSource();
const store = new Store(source);

export default new Environment({
  network,
  store
})
