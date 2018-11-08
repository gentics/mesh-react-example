import React from 'react';
import { Link } from 'react-router-dom';
import { getNavigation } from './api';

export default class Navigation extends React.Component {

  state = {
    categories: []
  }

  async componentDidMount() {
    const categories = await getNavigation();
    this.setState({ categories })
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Home</Link>
          </div>

          <ul className="nav navbar-nav">
            {this.state.categories.map(category => (
              <NavElement key={category.uuid} category={category} />
            ))}
          </ul>
        </div>
      </nav>
    )
  }
}

function NavElement({ category }) {
  return (
    <li>
      <Link to={`/category/${category.uuid}`}>
        {category.fields.name}
      </Link>
    </li>
  )
}