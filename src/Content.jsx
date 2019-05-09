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
  
  const [nodeResponse, setNodeResponse] = useState();
  useWebsocketBridge(async () => { setNodeResponse(await getNodeByPath(location.pathname)) });

  useEffect(() => {
    getNodeByPath(location.pathname).then(setNodeResponse);  
  });

  if (!nodeResponse) {
    return null;
  }
  
  const NodeComponent = NodeComponents[nodeResponse.schema.name];
  return <NodeComponent node={nodeResponse} />
}
