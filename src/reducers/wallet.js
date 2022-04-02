const INITIAL_WALLET_STATE = {
  currency: 'BRL',
  currencies: [],
  expenses: [],
  error: '',
  isLoading: false,
  exchangeRates: {},
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default wallet;
