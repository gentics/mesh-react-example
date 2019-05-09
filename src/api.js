import {useState, useEffect} from 'react';

export async function getNavigation() {
  return graphQl(`query Navigation {
    project {
      rootNode {
        children(filter: {schema: {is: category}}) {
          elements {
            uuid
            path
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


export async function getNodeByPath(path) {
  return graphQl(`
  query Webroot($path: String) {
    node(path: $path) {
      schema {
        name
      }
      ...category
      ...product
    }
  }
  ${categoryFragment}
  ${productFragment}
  `, {path}).then(response => response.node);
}

const categoryFragment = `
fragment category on Node {
  fields {
    ... on category {
      name
    }
  }
  children {
    elements {
      uuid
      path
      fields {
        ... on vehicle {
          name
          weight
          description(linkType: SHORT)
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
}`

const productFragment = `
fragment product on Node {
  fields {
    ... on vehicle {
      name
      description(linkType: SHORT)
      SKU
      price
      weight
      stocklevel
      vehicleImage {
        path
      }
    }
  }
}`

export function usePromise(promiseFn) {
  const [state, setState] = useState();

  useEffect(() => {
    promiseFn().then(setState)
  }, [promiseFn])

  return state;
}

function graphQl(query, variables) {
  return post(`/demo/graphql`, { query, variables }).then(response => response.data);
}

function post(path, data) {
  return fetch(`/api/v1${path}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => response.json());
}