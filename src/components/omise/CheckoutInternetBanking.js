import React from 'react';
import Script from 'react-load-script';
import '../../App.css';
import { publicKey } from '../../confidential/key';
import { internetBanking } from '../../services/CreditCard';

let OmiseCard;

function CheckoutInternetBanking() {
  const handleScriptLoad = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey,
      frameLabel: 'ESC Shop',
      submitLabel: 'PAY NOW',
      currency: 'thb'
    });
  };

  const internetBankingConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: 'internet_banking',
      otherPaymentMethods: []
    });
    OmiseCard.configureButton('#internet-banking');
    OmiseCard.attach();
  };

  const omiseCardHandler = () => {
    OmiseCard.open({
      frameDescription: 'Invoice #3847',
      amount: 10000,
      onCreateTokenSuccess: token => {
        internetBanking(token, 'test@email.com', 1000, 'keng');
        console.log(token);
      },
      onFormClosed: () => {}
    });
  };

  const handleClick = e => {
    e.preventDefault();
    internetBankingConfigure();
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
          id='internet-banking'
          className='btn internet-banking'
          type='button'
          // disabled={cart.amount === 0}
          onClick={e => handleClick(e)}
        >
          Pay with Internet Banking / Others
        </button>
      </form>
    </div>
  );
}

export default CheckoutInternetBanking;
