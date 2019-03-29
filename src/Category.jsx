import React from 'react';
import { Link } from 'react-router-dom';

export default function Category({ node }) {
  return (
    <div className="product-list">
      <h1>{node.fields.name}</h1>
      <p>{node.fields.description}</p>
      <div className="row">
        {node.children.elements.map(vehicle => (
          <VehicleTeaser vehicle={vehicle} key={vehicle.uuid} />
        ))}
      </div>
    </div>
  );
}

function VehicleTeaser({ vehicle }) {
  return (
    <div className="product-row col-xs-12 col-sm-6 col-md-4">
      <div className="panel panel-default">
        <div className="panel-body">
          <h3>
            <Link to={vehicle.path}>{vehicle.fields.name}</Link>
            {" "}
            <small>{vehicle.fields.SKU}</small>
          </h3>

          <Link to={vehicle.path}>
            <img alt="" className="img-thumbnail" src={`${vehicle.fields.vehicleImage.path}?w=328`} />
          </Link>
          <div className="description" dangerouslySetInnerHTML={{ __html: vehicle.fields.description }}></div>

          <hr />

          <div className="row">
            <div className="col-xs-6 price">
              <span className="label label-primary">
                {toEuro(vehicle.fields.price)}
              </span>
            </div>
            <div className="col-xs-6 text-right">
              <span className="label label-default">Weight: {vehicle.fields.weight}</span>
              <br />
              <span className="label label-default">Stock: {vehicle.fields.stocklevel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const intl = new Intl.NumberFormat('de-DE', { style: 'currency', 'currency': 'EUR' })
function toEuro(value) {
  return intl.format(value);
}
