import React from 'react';
import { getProducts } from './api';

export default class ProductList extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({
      products: await getProducts(this.props.match.params.uuid)
    })
  }

  render() {
    return (
      <pre>
        {JSON.stringify(this.state, undefined, 2)}
      </pre>
    )
  }
}
