import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

class App extends Component {
  constructor(props) {
    super(props);

    this.responseGoogle = this.responseGoogle.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      loggedIn: false,
      name: '',
      email: '',
      imageUrl: ''
    };
  }

  responseGoogle(response) {
    console.log(response);

    var profile = response.getBasicProfile();

    this.setState({
      loggedIn: true,
      name: profile.getName(),
      email: profile.getEmail(),
      imageUrl: profile.getImageUrl()
    });
  }

  logout(response) {
    this.setState({ loggedIn: false });
  }

  render() {
    return (
      <div className="App">
        <br />
        {this.state.loggedIn ? (
          <div>
            <img src={this.state.imageUrl} />
            <br />
            <h2>{this.state.name}</h2>
            <h3>{this.state.email}</h3>
            <br />
            <GoogleLogout buttonText="Logout" onLogoutSuccess={this.logout} />
          </div>
        ) : (
          <div>
            <h2>Login by your elephant.loans email.</h2>
            <br />
            <GoogleLogin
              clientId="596468642587-lvhlnr3konleqdkmfe2b25m8iugojm9m.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              hostedDomain="elephant.loans"
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
