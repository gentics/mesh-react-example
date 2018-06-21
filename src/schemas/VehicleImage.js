import React from 'react';
import Mesh from '../Mesh';

const query = `{
  path
  fields {
    ... on vehicleImage {
      name
    }
  }
}`

export default function VehicleImage({ node }) {
  return (
    <div>
      <h1>This is a responsive image!</h1>
      <h2>{node.fields.name}</h2>
      <Mesh.Image path={node.path} />
    </div>
  )
}

VehicleImage.mesh = {
  query,
  schema: "vehicleImage"
}