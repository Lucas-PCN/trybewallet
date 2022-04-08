export const ADD_USER = 'ADD_USER';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';

export const addUser = (email) => ({
  type: ADD_USER,
  userEmail: email,
});

export const saveCurrencies = (arrayOfCurrencies) => ({
  type: SAVE_CURRENCIES,
  currencies: arrayOfCurrencies,
});
