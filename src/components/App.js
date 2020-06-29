import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    username: '',
    email: '',
  }

  handleChnge = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    })
  }
  render() {
    return (

      <div className="App">
        <form>
          <label htmlFor="user">Name:
          <input type="text" id='user' name="username"
              value={this.state.username} onChange={this.handleChnge} />
          </label>

          <label htmlFor="email">Email:
          <input type="email" id='email' name="email"
              value={this.state.email} onChange={this.handleChnge} />
          </label>

          {/* <label htmlFor="user">Your Name:
          <input type="text" id='user' name="username"
              value={this.state.username} onChange={this.handleChnge} />
          </label> */}
        </form>
      </div>

    );
  }
}

export default App;
