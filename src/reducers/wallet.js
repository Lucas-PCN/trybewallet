import { SAVE_CURRENCIES, SAVE_EXPENSE_INFO } from '../actions/index';

const INITIAL_WALLET_STATE = {
  currencies: [],
  expenses: [],
  totalValue: 0,
};

const wallet = (state = INITIAL_WALLET_STATE, action) => {
  switch (action.type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case SAVE_EXPENSE_INFO:
    return {
      ...state,
      expenses: [...state.expenses, action.expenseInfos],
      totalValue: state.totalValue + action.value,
    };
  default:
    return state;
  }
};

export default wallet;
