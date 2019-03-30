import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import Category from './Category';
import Vehicle from './Vehicle';
import { useWebroot } from './api';

export default function Content() {
  return (
    <Switch>
      <Route path="/" exact component={WelcomeScreen} />
      <Route path="/" component={WebrootContent} />
    </Switch>
  );
}

const NodeComponents = {
  "category": Category,
  "vehicle": Vehicle
}

const WebrootContent = ({ location }) => {
  const node = useWebroot(location.pathname);
  if (!node) {
    return null;
  }
  const NodeComponent = NodeComponents[node.schema.name];
  return <NodeComponent node={node} />
}
