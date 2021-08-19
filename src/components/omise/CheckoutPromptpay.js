import React from 'react';
import '../../App.css';
import { promptpay } from '../../services/CreditCard';

function CheckoutPromptpay() {
  const handleClick = e => {
    e.preventDefault();
    promptpay(1000)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
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
