import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Map, fromJS} from 'immutable';
import ProductItem from './ProductItem';

const Content = ( {productsAppState, cartAppState, requestCart, requestProducts, setCartItem} ) => {
  if(!productsAppState.get("products"))
    requestProducts();
		
	if(!cartAppState.get("cart"))
		requestCart();
    
  const handleProductItemClick = (e) => {
    setCartItem(fromJS({
      cart_items: cartAppState.get("cart")? cartAppState.get("cart").map((value, index) =>
        value
      ).toJS() : [],
      cart_item: productsAppState.get("products").filter(value => 
        value.get('id') == e.target.value
      ).first().toJS()
    }));
  };
  
  const PrintProducts = 
    (productsAppState.get("products")) ?
      productsAppState.get("products").map((value, index) => 
        <ProductItem
          category={value.get("category")}
          description={value.get("description")}
          handleClick={handleProductItemClick}
          identifier={value.get("id")}
          image={value.get("image")}
          key={index}
          price={value.get("price")}
          title={value.get("title")}
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
  cartAppState: PropTypes.object.isRequired,
	requestCart: PropTypes.func.isRequired,
  requestProducts: PropTypes.func.isRequired,
  setCartItem: PropTypes.func.isRequired
};

export default Content;
