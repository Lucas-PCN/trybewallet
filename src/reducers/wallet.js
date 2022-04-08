import { SAVE_CURRENCIES } from '../actions/index';

const INITIAL_WALLET_STATE = {
  currency: 'BRL',
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
