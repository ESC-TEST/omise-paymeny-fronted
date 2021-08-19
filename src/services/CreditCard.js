import axios from 'axios';

export const cardCreate = async (token, email, amount, name) => {
  return axios({
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5ZTQwYzJmLTE1MjYtNDQ5ZC04NTY4LWFmY2U2OTY5OTlmZiIsImVtYWlsIjoid2FlbmdjaGFpa2t1bkBnbWFpbC5jb20iLCJpc19hY3RpdmUiOnRydWUsImZpcnN0X25hbWUiOiJrZW5nIiwibGFzdF9uYW1lIjoia2t1biIsInVzZXJfdHlwZSI6InB1YmxpYyIsImlzX3N1cGVydXNlciI6dHJ1ZSwiZXhwIjoxNjMwMDA0NzI5LCJpc3MiOiJFU0MifQ.q_p_Fc0Z4Q7P4h1k1vcj5BNIlgZ17jX1IRTUzAWH0HY',
      'Content-Type': 'application/json'
    },
    method: 'post',
    url: 'http://localhost:8010/api/auth/credit-card',
    data: {
      email: email,
      name: name,
      amount: amount,
      token: token
    }
  });
};

export const internetBanking = async (token, email, amount, name) => {
  return axios({
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5ZTQwYzJmLTE1MjYtNDQ5ZC04NTY4LWFmY2U2OTY5OTlmZiIsImVtYWlsIjoid2FlbmdjaGFpa2t1bkBnbWFpbC5jb20iLCJpc19hY3RpdmUiOnRydWUsImZpcnN0X25hbWUiOiJrZW5nIiwibGFzdF9uYW1lIjoia2t1biIsInVzZXJfdHlwZSI6InB1YmxpYyIsImlzX3N1cGVydXNlciI6dHJ1ZSwiZXhwIjoxNjMwMDA0NzI5LCJpc3MiOiJFU0MifQ.q_p_Fc0Z4Q7P4h1k1vcj5BNIlgZ17jX1IRTUzAWH0HY',
      'Content-Type': 'application/json'
    },
    method: 'post',
    url: 'http://localhost:8010/api/auth/internet-banking',
    data: {
      email: email,
      name: name,
      amount: amount,
      token: token
    }
  });
};

export const promptpay = async amount => {
  return axios({
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM5ZTQwYzJmLTE1MjYtNDQ5ZC04NTY4LWFmY2U2OTY5OTlmZiIsImVtYWlsIjoid2FlbmdjaGFpa2t1bkBnbWFpbC5jb20iLCJpc19hY3RpdmUiOnRydWUsImZpcnN0X25hbWUiOiJrZW5nIiwibGFzdF9uYW1lIjoia2t1biIsInVzZXJfdHlwZSI6InB1YmxpYyIsImlzX3N1cGVydXNlciI6dHJ1ZSwiZXhwIjoxNjMwMDA0NzI5LCJpc3MiOiJFU0MifQ.q_p_Fc0Z4Q7P4h1k1vcj5BNIlgZ17jX1IRTUzAWH0HY',
      'Content-Type': 'application/json'
    },
    method: 'post',
    url: 'http://localhost:8010/api/auth/promptpay',
    data: {
      amount: amount
    }
  });
};
