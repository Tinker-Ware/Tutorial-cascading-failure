import React, {PropTypes} from 'react';

const ProductItem = ( props ) => {
  return (
      <div key={props.identifier} className="col-md-3 item-grid simpleCart_shelfItem">
        <div className="mid-pop">
          <div className="pro-img">
            <img src={require("../images/"+props.image)} className="img-responsive" alt={props.title}/>
          </div>
          <div className="mid-1">
            <div className="women">
              <div className="women-top">
                <span>{props.category}</span>
                <h6><a href="javascript:void(0)">{props.title}</a></h6>
              </div>
              <div className="img item_add">
                <a href="javascript:void(0)">
                  <img 
                    onClick={props.handleClick}
                    id={props.identifier}
                    src={require("../images/ca.png")}
                    alt="add to cart" />
                </a>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="mid-2">
              <p><em className="item_price">$ {props.price}</em></p>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
  );
};

ProductItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  identifier: PropTypes.number,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default ProductItem;