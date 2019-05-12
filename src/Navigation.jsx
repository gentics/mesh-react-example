import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getNavigation } from './api';

export default function Navigation() {

  const [navResponse, setNavResponse] = useState();

  useEffect(() => {
    getNavigation().then(setNavResponse);
  }, []);

  if (!navResponse) {
    return null;
  }

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Home</Link>
        </div>

        <ul className="nav navbar-nav">
          {navResponse && navResponse.project.rootNode.children.elements.map(category => (
            <NavElement key={category.uuid} category={category} />
          ))}
        </ul>
      </div>
    </nav>
  )
}

function NavElement({ category }) {
  return (
    <li>
      <Link to={category.path}>
        {category.fields.name}
      </Link>
    </li>
  )
}