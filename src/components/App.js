import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    username: '',
    email: '',
    pass: '',
    accept: false,
    message: '',

    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false,
    }
  }
  messages = {
    username_incorrect: 'The "Name" must contain at least 10 characters',
    email_incorrect: 'The email has to contain "@" character',
    pass_incorrect: 'The "Password" must contain 8 characters',
    accept_incorrect: 'Accept the terms'
  }


  handleChange = (e) => {

    const name = e.target.name;
    const type = e.target.type;

    if (type === "email" || type === "password" || type === "text") {
      const value = e.target.value;
      this.setState({
        [name]: value
      })
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked
      })
    }

  }
  handleSubmit = (e) => {
    e.preventDefault();
    const validation = this.formValidation()

    if (validation.correct) {
      this.setState({
        username: '',
        email: '',
        pass: '',
        accept: false,
        message: 'Submitted',

        errors: {
          username: false,
          email: false,
          pass: false,
          accept: false,
        }
      })

    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          pass: !validation.password,
          accept: !validation.accept,
        }
      })
    }
  }

  formValidation = () => {
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;

    if (this.state.username.length >= 10 && this.state.username.indexOf(' ') === -1) {
      username = true;
    }
    if (this.state.email.indexOf('@') !== -1) {
      email = true;
    }
    if (this.state.pass.length === 8) {
      password = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (username && email && password && accept) {
      correct = true;
    }
    return ({
      correct,
      email,
      username,
      password,
      accept,
    })
  }
  componentDidUpdate() {
    if (this.state.message !== '') {
      setTimeout(() => this.setState({
        message: '',
      }), 3000)
    }
  }
  render() {
    return (
      <>
        <h1>Form Validation</h1>
        <div className="App">

          <form onSubmit={this.handleSubmit} noValidate>
            <label htmlFor="user">Name:
          <input type="text" id='user' name="username"
                value={this.state.username} onChange={this.handleChange} />
            </label>

            <label htmlFor="email">E-mail:
          <input type="email" id='email' name="email"
                value={this.state.email} onChange={this.handleChange} />
            </label>

            <label htmlFor="password">Password:
          <input type="password" id='password' name="pass"
                value={this.state.pass} onChange={this.handleChange} />
            </label>

            <label htmlFor="accept">
              <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange} />Accept terms.
          </label>

            <button>Sign in</button>
          </form>
          <div className="errors">
            {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
            {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
            {this.state.errors.pass && <span>{this.messages.pass_incorrect}</span>}
            {this.state.errors.accept && <span>{this.messages.accept_incorrect}</span>}
            {this.state.message !== '' && <h3>{this.state.message}</h3>}
          </div>
        </div>
      </>
    );
  }
}

export default App;
