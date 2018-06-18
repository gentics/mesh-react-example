import React from 'react';
import Mesh from '../Mesh';

export default function VehicleImage({ node }) {
  return (
    <div>
      <h1>This is a responsive image!</h1>
      <Mesh.Image path={node.path} />
    </div>
  )
}

VehicleImage.mesh = {
  schema: "vehicleImage"
}