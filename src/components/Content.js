import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import ProductItem from './ProductItem';

const Content = ( {productsAppState, requestProducts} ) => {
  if(!productsAppState.get("products"))
    requestProducts();
  
  const PrintProducts = 
    (productsAppState.get("products")) ?
      productsAppState.get("products").get("products").map((value, index) => 
        <ProductItem
          identifier={index}
          key={index}
          title={value.get("title")}
          category={value.get("category")}
          description={value.get("description")}
          price={value.get("price")}
          image={value.get("image")}
        />) : "";
        
  return (
    <div className="content">
      <div className="container">
        <div className="content-top"></div>
        <div className="content-mid">
          <h3>Trending Items</h3>
          <label className="line"></label>
          <div className="mid-popular">
            {PrintProducts}
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="brand">
          <div className="col-md-3 brand-grid">
            <img src="images/ic.png" className="img-responsive" alt=""/>
          </div>
          <div className="col-md-3 brand-grid">
            <img src="images/ic1.png" className="img-responsive" alt=""/>
          </div>
          <div className="col-md-3 brand-grid">
            <img src="images/ic2.png" className="img-responsive" alt=""/>
          </div>
          <div className="col-md-3 brand-grid">
            <img src="images/ic3.png" className="img-responsive" alt=""/>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  productsAppState: PropTypes.object.isRequired,
  requestProducts: PropTypes.func.isRequired
};

export default Content;
