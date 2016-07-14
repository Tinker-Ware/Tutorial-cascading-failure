import React, {PropTypes} from 'react';

const ProductItem = ( props ) => {
  return (
      <div key={props.identifier} className="col-md-3 item-grid simpleCart_shelfItem">
        <div className="mid-pop">
          <div className="pro-img">
            <img src={props.image} className="img-responsive" alt=""/>
            <div className="zoom-icon ">
              <a className="picture b-link-stripe b-animate-go thickbox" href="images/pc.jpg" rel="title"><i className="glyphicon glyphicon-search icon "></i></a>
              <a href="single.html"><i className="glyphicon glyphicon-menu-right icon"></i></a>
            </div>
          </div>
          <div className="mid-1">
            <div className="women">
              <div className="women-top">
                <span>{props.category}</span>
                <h6><a href="#">{props.title}</a></h6>
              </div>
              <div className="img item_add">
                <a href="#"><img src="images/ca.png" alt=""/></a>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="mid-2">
              <p><em className="item_price">{props.price}</em></p>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
  );
};

ProductItem.propTypes = {
  identifier: PropTypes.number,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default ProductItem;