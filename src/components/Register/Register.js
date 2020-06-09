import React, { Component } from "react";

import styles from "./Register.module.css";

class Registrer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  onRegisterSubmit = () => {
    const { name, email, password } = this.state;
    const { onRouteChange, loadUser } = this.props;
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.id) {
          loadUser(user);
          onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <article className='flexItem'>
        <main>
          <fieldset className={styles.sign_up}>
            <legend className={styles.legend}>Skapa konto</legend>
            <div className={styles.inputWrap}>
              <label className={styles.label} htmlFor='email-address'>
                Namn
              </label>
              <input
                className={styles.textInput}
                type='name'
                name='name'
                id='name'
                onChange={this.onNameChange}
              />
            </div>
            <div className={styles.inputWrap}>
              <label className={styles.label} htmlFor='email-address'>
                Email
              </label>
              <input
                className={styles.textInput}
                type='email'
                name='email-address'
                id='email-address'
                onChange={this.onEmailChange}
              />
            </div>
            <div className={styles.inputWrap}>
              <label className={styles.label} htmlFor='password'>
                Lösenord
              </label>
              <input
                className={styles.textInput}
                type='password'
                name='password'
                id='password'
                onChange={this.onPasswordChange}
              />
            </div>
          </fieldset>
          <div className={styles.submitButtonWrap}>
            <input
              className={styles.submitButton}
              type='submit'
              value='Skapa konto'
              onClick={this.onRegisterSubmit}
            />
          </div>
        </main>
      </article>
    );
  }
}

export default Registrer;
