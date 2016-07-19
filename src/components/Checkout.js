import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Map, fromJS} from 'immutable';
import CartProductItem from './CartProductItem';

const Checkout = ( {productsAppState, cartAppState, deleteCartItem} ) => {
	const handleCartProductItemDeleteClick = (e) => {
    deleteCartItem(fromJS({
      cart_items: cartAppState.get("cart")? cartAppState.get("cart").map((value, index) =>
        value
      ).toJS() : [],
      id: e.target.value
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
				<div className="produced">
					<a
						href="single.html"
						className="hvr-skew-backward">Produced To Buy</a>
				</div>
			</div>
		</div>
  );
};

Checkout.propTypes = {
  productsAppState: PropTypes.object.isRequired,
  cartAppState: PropTypes.object.isRequired,
	deleteCartItem: PropTypes.func.isRequired
};

export default Checkout;
