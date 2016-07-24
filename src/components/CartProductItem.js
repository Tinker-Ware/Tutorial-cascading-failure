import React, {PropTypes} from 'react';

const CartProductItem = ( props ) => {
  return (
		<tr key={props.identifier} className="cart-header">
			<td className="ring-in">
				<a href="single.html" className="at-in">
					<img src={require("../images/"+props.image)} className="img-responsive" alt={props.title} />
				</a>
				<div className="sed">
					<h5>
						<a href="javascript:void(0)">{props.title}</a>
					</h5>
					<p>{props.category}</p>
				</div>
				<div className="clearfix"> </div>
				<div
          onClick={props.handleClick}
          id={props.identifier}
          className="close1" />
			</td>
			<td>$ {props.price}</td>
			<td>FREE SHIPPING</td>
			<td className="item_price">$ {props.price}</td>
		</tr>
  );
};

CartProductItem.propTypes = {
	handleClick: PropTypes.func.isRequired,
  identifier: PropTypes.number,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default CartProductItem;