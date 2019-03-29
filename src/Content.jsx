import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import Category from './Category';
import Vehicle from './Vehicle';

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
  if (location.pathname === "/aircrafts/space-shuttle") {
    const node = {
      fields: {
        name: "Space Shuttle",
        SKU: 3,
        price: 192000000000,
        weight: 22700,
        description: "The Space Shuttle was a partially reusable low Earth orbital spacecraft system operated by the U.S. National Aeronautics and Space Administration (NASA).",
        vehicleImage: { path: "/images/sts.jpg" }
      }
    };
    const NodeComponent = NodeComponents["vehicle"];
    return <NodeComponent node={node} />
  } else if (location.pathname === "/aircrafts") {
    const node = {
      fields: {
        name: "Aircraft"
      },
      children: {
        elements: [{
          path: "/aircrafts/space-shuttle",
          fields: {
            vehicleImage: { path: "/images/sts.jpg" },
            name: "Space shuttle",
            SKU: 3,
            price: 192000000000,
            weight: 22700
          }
        }]
      }
    };
    const NodeComponent = NodeComponents["category"];
    return <NodeComponent node={node} />
  } else {
    return null;
  }
}
