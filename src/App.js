import React from 'react';
import './App.css';
import CheckoutCreditCard from './components/omise/CheckoutCreditCard';
import CheckoutInternetBanking from './components/omise/CheckoutInternetBanking';
import CheckoutPromptpay from './components/omise/CheckoutPromptpay';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <CheckoutCreditCard />
        <CheckoutInternetBanking />
        <CheckoutPromptpay />
      </header>
    </div>
  );
}

export default App;
