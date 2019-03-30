import React from 'react';

export default function Vehicle({node}) {
  return (
    <div className="product-detail">
      <h1>{node.fields.name}</h1>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input className="form-control" id="name" name="name" placeholder="Name" defaultValue={node.fields.name} />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <div dangerouslySetInnerHTML={{__html: node.fields.description}}></div>
            </div>

            <div className="form-group">
              <label htmlFor="sku">SKU</label>
              <input className="form-control" id="sku" name="SKU" placeholder="SKU" defaultValue={node.fields.SKU} type="number" />
            </div>

            <div className="row">
              <div className="col-sm-4 form-group">
                <label htmlFor="price">Price</label>
                <input className="form-control" id="price" min="0" name="price" step="0.01" type="number" defaultValue={node.fields.price} />
              </div>
              <div className="col-sm-4 form-group">
                <label htmlFor="weight">Weight</label>
                <input className="form-control" id="weight" min="0" name="weight" type="number" defaultValue={node.fields.weight} />
              </div>
              <div className="col-sm-4 form-group">
                <label htmlFor="stocklevel">Stock Level</label>
                <input className="form-control" id="stocklevel" min="0" name="stocklevel" type="number" defaultValue={node.fields.stocklevel} />
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <img className="img-thumbnail" src={`/api/v1/demo/webroot/${node.fields.vehicleImage.path}`} alt="" />
        </div>
      </div>
    </div>
  );
}