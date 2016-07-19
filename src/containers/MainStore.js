import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/ServiceFormActions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Content from '../components/Content';
import Checkout from '../components/Checkout';

export class MainStore extends Component {
  render() {
    const MainPageContent = 
      location.pathname == "/" ?
        <Content
          productsAppState={this.props.productsAppState}
          cartAppState={this.props.cartAppState}
					requestCart={this.props.actions.requestCart}
          requestProducts={this.props.actions.requestProducts}
          setCartItem={this.props.actions.setCartItem} /> : "";
    const MainPageBanner = 
      location.pathname == "/" ?
        <Banner /> : "";
		const CheckoutContent = 
      location.pathname == "/checkout" ?
        <Checkout 
          productsAppState={this.props.productsAppState}
          cartAppState={this.props.cartAppState}
					deleteCartItem={this.props.actions.deleteCartItem} /> : "";
    return (
      <div>
        <Header cartAppState={this.props.cartAppState} />
        {MainPageBanner}
        {MainPageContent}
				{CheckoutContent}
        <Footer />
      </div>
    );
  }
}

MainStore.propTypes = {
  actions: PropTypes.object.isRequired,
  productsAppState: PropTypes.object.isRequired,
  cartAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    productsAppState: state.productsAppState,
    cartAppState: state.cartAppState
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
