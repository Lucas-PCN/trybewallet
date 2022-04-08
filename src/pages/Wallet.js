import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { saveCurrencies } from '../actions';

class Wallet extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     arrayOfCurrencies: [],
  //   };
  // }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies = async () => {
    const { dispatch } = this.props;

    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const requestObject = await request.json();
    const arrayWithoutUSDT = Object.keys(requestObject)
      .filter((currency) => currency !== 'USDT');

    // this.setState({
    //   arrayOfCurrencies: [objWithoutUSDT],
    // });

    dispatch(saveCurrencies(arrayWithoutUSDT));
  }

  render() {
    return (
      <section>
        <Header />
      </section>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
