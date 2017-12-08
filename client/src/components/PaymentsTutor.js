import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux';
import * as actions from '../actions';

class PaymentsTutor extends Component {
  render() {
    return (
      <StripeCheckout
        name="Sparta"
        description="$10 for 1 hour of teaching"
        amount={1000}
        token={token => this.props.handleTokenTutor(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        panelLabel= "Redeem Money"
      >
        <button className="btn">Redeem Credits</button>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(PaymentsTutor);
