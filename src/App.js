import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Mesh from './Mesh';

export default function App() {
  return (
    <Router>
      <div>
        <Route path="/" render={route =>
          <Mesh.Webroot path={route.location.pathname} />
        } />
      </div>
    </Router>
  )
}
