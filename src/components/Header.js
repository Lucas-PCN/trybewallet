import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const totalValue = expenses
      .reduce((acumulator, expense) => acumulator + (expense.value * expense
        .exchangeRates[expense.currency].ask), 0);
    return (
      <div>
        <p>
          Email:
          <span data-testid="email-field">{ email }</span>
        </p>
        <p data-testid="total-field">
          { totalValue.toFixed(2) }
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
