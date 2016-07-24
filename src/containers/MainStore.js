import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/ServiceFormActions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Content from '../components/Content';
import Checkout from '../components/Checkout';
import User from '../components/User';
import OrderSummary from '../components/OrderSummary';

export class MainStore extends Component {
  render() {
  const MainPageContent =
      location.pathname == "/" || location.pathname == "/women" || location.pathname == "/men" ?
        <Content
        productsAppState={this.props.productsAppState}
        cartAppState={this.props.cartAppState}
        userAppState={this.props.userAppState}
        orderAppState={this.props.orderAppState}
        requestCart={this.props.actions.requestCart}
        requestProducts={this.props.actions.requestProducts}
        requestUser={this.props.actions.requestUser}
        setCartItem={this.props.actions.setCartItem}
        filter={location.pathname.replace("/","").replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); })} /> : "";
    const MainPageBanner = 
      location.pathname == "/"?
        <Banner /> : "";
    const CheckoutContent = 
      location.pathname == "/checkout" ?
        <Checkout 
          productsAppState={this.props.productsAppState}
          cartAppState={this.props.cartAppState}
          deleteCartItem={this.props.actions.deleteCartItem}
          setOrder={this.props.actions.setOrder} /> : "";
    const UserContent = 
      location.pathname == "/user" ?
        <User 
          userAppState={this.props.userAppState} /> : "";
    const OrderSummaryContent = 
      location.pathname == "/orderSummary" ?
        <OrderSummary 
          orderAppState={this.props.orderAppState}
          cleanCart={this.props.actions.cleanCart} /> : "";
    return (
      <div>
        <Header
					cartAppState={this.props.cartAppState}
					userAppState={this.props.userAppState} />
        {MainPageBanner}
        {MainPageContent}
				{CheckoutContent}
        {OrderSummaryContent}
				{UserContent}
				<div className="container">
					<div className="brand">
						<div className="col-md-3 brand-grid">
							<img src={require("../images/ic.png")} className="img-responsive" alt=""/>
						</div>
						<div className="col-md-3 brand-grid">
							<img src={require("../images/ic1.png")} className="img-responsive" alt=""/>
						</div>
						<div className="col-md-3 brand-grid">
							<img src={require("../images/ic2.png")} className="img-responsive" alt=""/>
						</div>
						<div className="col-md-3 brand-grid">
							<img src={require("../images/ic3.png")} className="img-responsive" alt=""/>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
        <Footer />
      </div>
    );
  }
}

MainStore.propTypes = {
  actions: PropTypes.object.isRequired,
  productsAppState: PropTypes.object.isRequired,
  cartAppState: PropTypes.object.isRequired,
  orderAppState: PropTypes.object.isRequired,
	userAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    productsAppState: state.productsAppState,
    cartAppState: state.cartAppState,
    orderAppState: state.orderAppState,
		userAppState: state.userAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainStore);
