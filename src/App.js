import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mesh from './Mesh';

export default function App() {
  return (
    <Router>
      <Route path="/" render={route =>
        <Mesh.Webroot path={route.location.pathname} />
      } />
    </Router>
  )
}
