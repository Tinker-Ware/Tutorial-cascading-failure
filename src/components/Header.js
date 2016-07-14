import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="head">
          <div className=" logo">
            <a href="index.html"><img src="images/logo.png" alt=""/></a>	
          </div>
        </div>
      </div>
      <div className="header-top">
        <div className="container">
          <div className="col-sm-5 col-md-offset-2  header-login">
            <ul >
              <li><a href="checkout.html">Checkout</a></li>
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
                  <li><a className="color" href="index.html">Home</a></li>
                  <li><a className="color" href="#">Women</a></li>
                  <li><a className="color" href="#">Home</a></li>
                  <li ><a className="color6" href="contact.html">Contact</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-sm-2 search-right">
            <div className="cart box_1">
              <a href="checkout.html">
                <h3>
                  <div className="total">
                    <span className="simpleCart_total"></span>
                  </div>
                  <img src="images/cart.png" alt=""/>
                </h3>
              </a>
              <p><a href="javascript:;" className="simpleCart_empty">Empty Cart</a></p>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
