import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    username: '',
    email: '',
    pass: '',
    accept: false,
  }

  handleChange = (e) => {
    const value = e.target.value;
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
    console.log('dziala')
  }
  render() {
    return (

      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">Name:
          <input type="text" id='user' name="username"
              value={this.state.username} onChange={this.handleChange} />
          </label>

          <label htmlFor="email">Email:
          <input type="email" id='email' name="email"
              value={this.state.email} onChange={this.handleChange} />
          </label>

          <label htmlFor="password">Password:
          <input type="password" id='password' name="pass"
              value={this.state.pass} onChange={this.handleChange} />
          </label>

          <label htmlFor="accept">
            <input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange} />Accept terms
          </label>

          <button>Sign in</button>
        </form>
      </div>

    );
  }
}

export default App;
