export const ADD_USER = 'ADD_USER';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const SAVE_EXPENSE_INFO = 'SAVE_EXPENSE_INFO';
const URL_ECONOMIA = 'https://economia.awesomeapi.com.br/json/all';

export const addUser = (email) => ({
  type: ADD_USER,
  userEmail: email,
});

export const saveCurrencies = (arrayOfCurrencies) => ({
  type: SAVE_CURRENCIES,
  currencies: arrayOfCurrencies,
});

export const saveExpenseInfos = (id, expenseInfos, exchangeRates) => {
  const valueCurrencyInBRL = Object.entries(exchangeRates)
    .filter((currency) => currency[0] === expenseInfos.currency);

  return ({
    type: SAVE_EXPENSE_INFO,
    expenseInfos: {
      id,
      ...expenseInfos,
      exchangeRates,
    },
    value: Math.trunc(expenseInfos.value * (valueCurrencyInBRL[0][1].ask) * 100) / 100,
  });
};

export const fetchEconomyJSONFromAPI = (id, expenseInfos) => async (dispatch) => {
  const response = await fetch(URL_ECONOMIA);
  const data = await response.json();
  return dispatch(saveExpenseInfos(id, expenseInfos, data));
};
