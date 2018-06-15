import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import MeshReact from 'react-mesh';
// import Folder from './schemas/Folder';

const Mesh = MeshReact({
  baseUrl: "/api/v1",
  projectName: "demo",
  imageBreakpoints: [768, 1024, 1920]
})

export default function App() {
  return (
    <Mesh.Image path="/images/yacht-pelorus.jpg" />
  )
}
