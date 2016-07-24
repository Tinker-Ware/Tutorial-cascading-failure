import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = ( {cartAppState, userAppState} ) => {
  return (
    <div className="Header">
      <div className="container">
        <div className="head">
          <div className=" logo">
            <Link to={'/'}><img src={require("../images/logo.png")} alt=""/></Link>
          </div>
        </div>
      </div>
      <div className="header-top">
        <div className="container">
          <div className="col-sm-5 col-md-offset-2  header-login">
            <ul >
              <li>
								<Link to={'/user'}>{userAppState.get("user")?"Welcome "+userAppState.get("user").get("username"):"Log in"}</Link>
								<Link to={'/checkout'}>Checkout</Link>
							</li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
      <div className="container">
        <div className="head-top">
          <div className="col-sm-8 col-md-offset-2 h_menu4">
            <nav className="navbar nav_bottom" role="navigation">
              <div className="navbar-header nav_2">
                <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                <ul className="nav navbar-nav nav_1">
                  <li><Link className="color" to={'/'}>Home</Link></li>
                  <li><Link className="color" to={'/women'}>Women</Link></li>
                  <li><Link className="color" to={'/men'}>Men</Link></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-sm-2 search-right">
            <div className="cart box_1">
              <Link to={'/checkout'}>Checkout
                <h3>
                  <div className="total">
                    <span className="simpleCart_total">${cartAppState.get("cart") && cartAppState.get("cart").size > 0 ? cartAppState.get("cart").map((value, index) =>
                      value.get("price")
                    ).toJS().reduce(function(previousValue, currentValue) {
                      return previousValue + currentValue;
                    }).toFixed(2):0}</span>
                  </div>
                  <img src={require("../images/cart.png")} alt=""/>
                </h3>
              </Link>
              <p><Link to={'/checkout'} className="simpleCart_empty">{cartAppState.get("cart") ? cartAppState.get("cart").size + ' Product(s)': 'Empty Cart'}</Link></p>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  cartAppState: PropTypes.object.isRequired,
	userAppState: PropTypes.object.isRequired
};

export default Header;
