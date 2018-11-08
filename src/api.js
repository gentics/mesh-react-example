export async function getNavigation() {
  const project = await getProject();
  return get(`/demo/nodes/${project.rootNode.uuid}/children`)
    .then(response => response.data
    .filter(nodes => nodes.schema.name === 'category'));
}

export async function getProducts(uuid) {
  return get(`/demo/nodes/${uuid}/children`)
    .then(response => response.data)
}

export function getProject() {
  return get(`/demo`)
}

function get(path) {
  return fetch(`/api/v1${path}`)
    .then(response => response.json());
}