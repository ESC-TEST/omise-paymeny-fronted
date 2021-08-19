import React from 'react';
import '../../App.css';
import { promptpay } from '../../services/CreditCard';

function CheckoutPromptpay() {
  const handleClick = e => {
    e.preventDefault();
    promptpay(1000)
      .then((res, req) => {
        console.log(res, req);
      })
      .then((res, req) => {
        console.log(res, req);
      });
  };

  return (
    <div className='App'>
      <form>
        <button
          id='promptpay'
          className='btn internet-banking'
          type='button'
          // disabled={cart.amount === 0}
          onClick={e => handleClick(e)}
        >
          Promptpay
        </button>
      </form>
    </div>
  );
}

export default CheckoutPromptpay;
