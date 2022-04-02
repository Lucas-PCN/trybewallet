import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.validateButton();
    });
  }

  validateButton = () => {
    const { email, password } = this.state;
    const emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const emailValidate = emailPattern.test(email);
    const passwordMax = 6;
    const passwordValidate = password.length >= passwordMax;
    const valid = emailValidate && passwordValidate;
    this.setState({ isButtonDisabled: !valid });
  }

  login = () => {
    const { emailToStore, history } = this.props;
    const { email } = this.state;
    emailToStore(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isButtonDisabled } = this.state;
    return (
      <form>
        <input
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          data-testid="email-input"
          placeholder="E-mail"
        />
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          data-testid="password-input"
          placeholder="Password"
        />
        <button
          type="button"
          onClick={ this.login }
          disabled={ isButtonDisabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  emailToStore: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailToStore: (email) => dispatch(addUser(email)),
});

export default connect(null, mapDispatchToProps)(Login);
