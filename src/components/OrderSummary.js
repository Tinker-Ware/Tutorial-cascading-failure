import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Map, fromJS} from 'immutable';
import OrderSummaryItem from './OrderSummaryItem';

const OrderSummary = ( {orderAppState, cleanCart} ) => {
	cleanCart("");
	const PrintOrderSummaryProducts = 
    (orderAppState.get("order")) ?
      orderAppState.get("order").map((value, index) => 
        <OrderSummaryItem
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
        <h2>Order Summary</h2>
        <p>Thanks for your order #120398</p>
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
							{PrintOrderSummaryProducts}
						</table>
					</div>
				</div>
			</div>
		</div>
  );
};

OrderSummary.propTypes = {
  orderAppState: PropTypes.object.isRequired,
	cleanCart: PropTypes.func.isRequired
};

export default OrderSummary;
