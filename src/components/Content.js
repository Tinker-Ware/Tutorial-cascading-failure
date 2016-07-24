import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Map, fromJS} from 'immutable';
import ProductItem from './ProductItem';

const Content = ( {productsAppState, cartAppState, userAppState, orderAppState, requestCart, requestProducts, requestUser, setCartItem, filter} ) => {
  if(!productsAppState.get("products"))
    requestProducts();
		
	if(!cartAppState.get("cart")&&!orderAppState.get("order"))
		requestCart();
		
	if(!userAppState.get("user"))
		requestUser();
  
  const handleProductItemClick = (e) => {
    setCartItem(fromJS({
      cart_items: cartAppState.get("cart")? cartAppState.get("cart").map((value, index) =>
        value
      ).toJS() : [],
      cart_item: productsAppState.get("products").filter(value => 
        value.get('id') == parseInt(e.target.id)
      ).first().toJS()
    }));
  };
  
  const PrintProducts = 
    (filter!=="")?
      (productsAppState.get("products")) ?
        productsAppState.get("products").filter(value => 
          value.get("category") === filter
        ).map((value, index) => 
          <ProductItem
            category={value.get("category")}
            description={value.get("description")}
            handleClick={handleProductItemClick}
            identifier={value.get("id")}
            image={value.get("image")}
            key={index}
            price={value.get("price")}
            title={value.get("title")}
          />) : ""
      : (productsAppState.get("products")) ?
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
      </div>
    </div>
  );
};

Content.propTypes = {
  productsAppState: PropTypes.object.isRequired,
  cartAppState: PropTypes.object.isRequired,
	userAppState: PropTypes.object.isRequired,
  orderAppState: PropTypes.object.isRequired,
	requestCart: PropTypes.func.isRequired,
  requestProducts: PropTypes.func.isRequired,
	requestUser: PropTypes.func.isRequired,
  setCartItem: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

export default Content;
