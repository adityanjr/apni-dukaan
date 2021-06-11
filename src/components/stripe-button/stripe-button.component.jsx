import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_live_51H43NOJektzsup0s9A1nlOOoWGNopMz5LzfraF6QBNgQh5qnFJi4aXYYNxW9QjBeVEtqcfy16inQcJWpVCgJHnwA00knOoTUaB';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='ADITYANJR Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;


// Test Card ----
// 4242 4242 4242 4242 --- EXP: 01/20 --- CVV:123