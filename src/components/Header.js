import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ email, expenses, currency }) => (
  <header>
    <p data-testid="email-field">{ email }</p>
    <p>
      <span data-testid="total-field">
        {
          expenses.reduce((acc, item) => acc + item, 0)
        }
      </span>
      {' '}
      <span data-testid="header-currency-field">
        {currency}
      </span>
    </p>
  </header>
);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currency: state.wallet.currency,
});

export default connect(mapStateToProps)(Header);
