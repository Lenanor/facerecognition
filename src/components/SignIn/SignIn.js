import React, { Component } from "react";

import styles from "./SignIn.module.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmit = () => {
    const { email, password } = this.state;
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        wrongCredentials: false,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        } else {
          this.setState({ wrongCredentials: true });
        }
      });
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className='flexItem'>
        <main>
          <fieldset className={styles.sign_in}>
            <legend className={styles.legend}>Logga in</legend>
            <div className={styles.inputWrap}>
              <label className={styles.label} htmlFor='email-address'>
                Email
              </label>
              <input
                className={styles.textInput}
                type='email'
                name='email-address'
                id='email-address'
                onChange={this.onChangeEmail}
              />
            </div>
            <div className={styles.inputWrap}>
              <label htmlFor='password'>Lösenord</label>
              <input
                className={styles.textInput}
                type='password'
                name='password'
                id='password'
                onChange={this.onChangePassword}
              />
            </div>
          </fieldset>
          {this.state.wrongCredentials ? (
            <p>Fel mailadress eller lösenord!</p>
          ) : (
            ""
          )}
          <div className={styles.submitButtonWrap}>
            <input
              className={styles.submitButton}
              type='submit'
              value='Logga in'
              onClick={this.onSubmit}
            />
          </div>
          <div className={styles.signinTextWrap}>
            <p
              className={styles.signinText}
              onClick={() => onRouteChange("register")}
            >
              Skapa nytt konto
            </p>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
