import React from 'react';
import { Link } from 'react-router-dom';

const query = `{
  uuid
  path
  children {
    elements {
      schema {
        name
      }
      path
      uuid
      displayName
    }
  }
}`

export default function Folder({ node }) {
  return (
    <div>
      <h1>Showing contents of Folder {node.path}</h1>
      <ul>
        {node.children.elements.map(Child)}
      </ul>
    </div>
  )
}

function Child(node) {
  let content
  if (node.schema.name === 'folder' || node.schema.name === 'vehicleImage') {
    content = <Link to={node.path}>{node.displayName}</Link>
  } else {
    content = node.displayName;
  }
  return (
    <li key={node.uuid}>
      {content}
    </li>
  )
}

Folder.mesh = {
  query,
  schema: "folder"
}