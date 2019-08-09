import React from 'react';
import { usePromise, getProduct } from './api';

export default function ProductDetail({match}) {
  const uuid = match.params.uuid;
  const response = usePromise(() => getProduct(uuid), [uuid]);
  if (!response) {
    return null;
  }
  const product = response.node;
  return (
    <div className="product-detail">
      <h1>{product.fields.name}</h1>
      <div className="row">
        <div className="col-md-6">
            <dl className="form-group">
              <dt>Name</dt>
              <dd>{product.fields.name}</dd>
            </dl>

            <dl className="form-group">
              <dt>Description</dt>
              <dd dangerouslySetInnerHTML={{__html: product.fields.description}} />
            </dl>

            <dl className="form-group">
              <dt>SKU</dt>
              <dd>{product.fields.SKU}</dd>
            </dl>

            <div className="row">
              <dl className="col-sm-4 form-group">
                <dt>Price</dt>
                <dd>{product.fields.price}</dd>
              </dl>
              <dl className="col-sm-4 form-group">
                <dt>Weight</dt>
                <dd>{product.fields.weight}</dd>
              </dl>
              <dl className="col-sm-4 form-group">
                <dt>Stock Level</dt>
                <dd>{product.fields.stocklevel}</dd>
              </dl>
            </div>
        </div>
        <div className="col-md-6">
          <img className="img-thumbnail" src={`/api/v1/demo/webroot/${product.fields.vehicleImage.path}`} alt="" />
        </div>
      </div>
    </div>
  );
}