import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import Category from './Category';
import Vehicle from './Vehicle';
import { getNodeByPath } from './api';
import useWebsocketBridge from './eventbus';

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
  // Create state for the component
  const [nodeResponse, setNodeResponse] = useState();

  // Register event callback to update the state when content gets changed in Gentics Mesh
  useWebsocketBridge(() => {
    getNodeByPath(location.pathname).then(setNodeResponse);
  });

  // Use effect hook to set the content when the path changes
  useEffect(() => {
    getNodeByPath(location.pathname).then(setNodeResponse);  
  }, [location.pathname]);

  if (!nodeResponse) {
    return null;
  }
  
  const NodeComponent = NodeComponents[nodeResponse.schema.name];
  return <NodeComponent node={nodeResponse} />
}
