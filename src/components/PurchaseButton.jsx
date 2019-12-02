import * as React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
  debugger
  console.log('Stripe Token', token);
  fetch('https://api.stripe.com/v1/charges', {method: 'POST', headers: {'Accept': 'application/json', 
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer pk_test_WFCmvstVaW21fcxhEtoVuHUY00VQZnhBlD'
  },
  body: token.card
});
};

const PurchaseButton = ({
  price, title, children, ...props
}) => (
  <StripeCheckout
    name="MoviesStore@appbase.io"
    description={title}
    token={onToken}
    label="Pay with 💳"
    amount={price}
    stripeKey={"pk_test_WFCmvstVaW21fcxhEtoVuHUY00VQZnhBlD"}
  >
    {children || <span {...props}>PURCHASE</span>}
  </StripeCheckout>
);

export default PurchaseButton