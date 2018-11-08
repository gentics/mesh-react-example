import {useState, useEffect} from 'react';

export async function getNavigation() {
  return graphQl(`query Navigation {
    project {
      rootNode {
        children(filter: {schema: {is: category}}) {
          elements {
            uuid
            fields {
              ... on category {
                name
              }
            }
          }
        }
      }
    }
  }`);
}

export async function getProducts(uuid) {
  return graphQl(`
  query Products($uuid:String) {
    node(uuid:$uuid) {
      fields {
        ... on category {
          name
          description
        }
      }
      children {
        elements {
          uuid
          fields {
            ... on vehicle {
              name
              weight
              description
              SKU
              price
              stocklevel
              vehicleImage {
                path
              }
            }
          }
        }
      }
    }
  }
  `, {uuid});
}

export function getProject() {
  return get(`/demo`)
}

export function usePromise(promiseFn, changes) {
  const [state, setState] = useState();

  useEffect(() => {
    promiseFn().then(setState)
  }, changes)

  return state;
}

function graphQl(query, variables) {
  return post(`/demo/graphql`, { query, variables }).then(response => response.data);
}

function get(path) {
  return fetch(`/api/v1${path}`)
    .then(response => response.json());
}

function post(path, data) {
  return fetch(`/api/v1${path}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => response.json());
}