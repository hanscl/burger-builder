import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
    totalPrice: 0,
  };

  componentWillMount = () => {
    this.updateIngredientsFromQueryParams();
  };

  //   componentWillUpdate = () => {
  //     this.updateIngredientsFromQueryParams();
  //   };

  updateIngredientsFromQueryParams = () => {
    //   const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    this.props.location.search
      .split('?')[1]
      .split('&')
      .forEach((ingredientParam) => {
        const paramElems = ingredientParam.split('=');
        if (paramElems[0] === 'price') {
          price = parseFloat(paramElems[1]);
        } else {
          ingredients[paramElems[0]] = parseInt(paramElems[1]);
        }
      });
    this.setState({ ingredients: ingredients, totalPrice: price });
  };

  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCanceled={this.checkoutCanceledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />}
        />
      </div>
    );
  }
}

export default Checkout;
