import React from 'react';
import '../../App.css';
import Script from 'react-load-script';
import { publicKey } from '../../confidential/key';
import { cardCreate } from '../../services/CreditCard';

let OmiseCard;
function CheckoutCreditCard() {
  const handleScriptLoad = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey,
      frameLabel: 'ESC Shop',
      submitLabel: 'PAY NOW',
      currency: 'thb'
    });
  };

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: 'credit_card',
      otherPaymentMethods: []
    });
    OmiseCard.configureButton('#credit_card');
    OmiseCard.attach();
  };

  const omiseCardHandler = () => {
    OmiseCard.open({
      frameDescription: 'Invoice #3847',
      amount: 10000,
      onCreateTokenSuccess: token => {
        cardCreate(token, 'test@email.com', 1000, 'keng')
          .then((res, req) => {
            console.log(res, req);
          })
          .then((res, req) => {
            console.log(res, req);
          });
        console.log(token);
      },
      onFormClosed: () => {}
    });
  };

  const handleClick = e => {
    e.preventDefault();
    creditCardConfigure();
    omiseCardHandler();
  };

  return (
    <div className='App'>
      <Script
        url='https://cdn.omise.co/omise.js'
        onLoad={() => handleScriptLoad()}
      />
      <form>
        <button
          id='credit_card'
          className='btn internet-banking'
          type='button'
          // disabled={amount === 0}
          onClick={e => handleClick(e)}
        >
          Pay with Credit Card
        </button>
      </form>
    </div>
  );
}

export default CheckoutCreditCard;
