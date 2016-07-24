import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Map, fromJS} from 'immutable';
import CartProductItem from './CartProductItem';

const Checkout = ( {productsAppState, cartAppState, deleteCartItem, setOrder} ) => {
	const handleCartProductItemDeleteClick = (e) => {
    deleteCartItem(fromJS({
      cart_items: cartAppState.get("cart")? cartAppState.get("cart").map((value, index) =>
        value
      ).toJS() : [],
      id: parseInt(e.target.id)
    }));
  };
	const handleProceedToBuyClick = (e) => {
    setOrder(fromJS({
      order_products: cartAppState.get("cart")? cartAppState.get("cart").map((value, index) =>
        value
      ).toJS() : []
    }));
  };
	const PrintCheckoutProducts = 
    (cartAppState.get("cart")) ?
      cartAppState.get("cart").map((value, index) => 
        <CartProductItem
					handleClick={handleCartProductItemDeleteClick}
          category={value.get("category")}
          description={value.get("description")}
          identifier={value.get("id")}
          image={value.get("image")}
          key={index}
          price={value.get("price")}
          title={value.get("title")}
        />) : "";
	const PrintBtnProceedToBuy = 
    (cartAppState.get("cart").size > 0) ?
			<div className="produced">
				<Link onClick={handleProceedToBuyClick} to={'/orderSummary'} className="hvr-skew-backward">
					Proceed To Buy</Link>
			</div> : "";
  return (
		<div className="container">
			<div className="check-out">
				<div
					className="bs-example4"
					data-example-id="simple-responsive-table">
					<div className="table-responsive">
						<table className="table-heading simpleCart_shelfItem">
							<tbody>
								<tr>
									<th className="table-grid">Item</th>
									<th>Prices</th>
									<th>Delivery</th>
									<th>Subtotal</th>
								</tr>
							</tbody>
							{PrintCheckoutProducts}
						</table>
					</div>
				</div>
				{PrintBtnProceedToBuy}
			</div>
		</div>
  );
};

Checkout.propTypes = {
  productsAppState: PropTypes.object.isRequired,
  cartAppState: PropTypes.object.isRequired,
	deleteCartItem: PropTypes.func.isRequired,
	setOrder: PropTypes.func.isRequired
};

export default Checkout;
