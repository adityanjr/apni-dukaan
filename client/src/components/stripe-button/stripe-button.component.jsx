import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_live_51H43NOJektzsup0s9A1nlOOoWGNopMz5LzfraF6QBNgQh5qnFJi4aXYYNxW9QjBeVEtqcfy16inQcJWpVCgJHnwA00knOoTUaB';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Fdownload-svg-freeuse-library-collection-of-baby-bottom-boy-anime-cool-smoke-PNG-free-PNG-Images_211128&psig=AOvVaw00b5UC4rrUPlxxHIJjhbky&ust=1623541794064000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPD_mNLikPECFQAAAAAdAAAAABAE'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
