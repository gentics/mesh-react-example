import React from 'react';
import { Route } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import ProductList from './ProductList';

export default function Content() {
  return (
    <>
      <Route path="/" exact component={WelcomeScreen} />
      <Route path="/category/:uuid" component={ProductList} />
    </>
  );
}
