import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/ServiceFormActions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Content from '../components/Content';

export class MainStore extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Content
          productsAppState={this.props.productsAppState}
          requestProducts={this.props.actions.requestProducts} />
        <Footer />
      </div>
    );
  }
}

MainStore.propTypes = {
  actions: PropTypes.object.isRequired,
  productsAppState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    productsAppState: state.productsAppState
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
