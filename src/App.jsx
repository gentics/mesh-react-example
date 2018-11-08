import React from 'react';
import Navigation from './Navigation';
import Content from './Content';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="container">
        <Title />
        <Navigation />
        <Content />
      </div>
    </Router>
  )
}

function Title() {
  return (
    <h2>Gentics Mesh Demo <small><a href="https://getmesh.io">getmesh.io</a></small></h2>
  )
}
