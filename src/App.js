import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MeshReact from 'react-mesh';

const Mesh = MeshReact({
  baseUrl: "/api/v1",
  projectName: "demo"
})

export default function App() {
  return (
    <Router>
      <Route path="/" render={route => (
        <Mesh.Webroot path={route.location.pathname} />
      )} />
    </Router>
  )
}