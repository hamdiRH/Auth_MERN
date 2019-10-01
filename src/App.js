import React, { Component } from "react";
import "./App.css";

import FacebookLogin from "react-facebook-login";

import GoogleLogin from "react-google-login";
import GitHubLogin from "react-github-login";

class App extends Component {
  render() {
    const responseFacebook = response => {
      console.log(response);
    };

    const responseGoogle = response => {
      console.log(response);
    };
    const onSuccess = response => console.log(response);
    const onFailure = response => console.error(response);

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

        <FacebookLogin
          appId="1207547222767719" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <br />
        <br />

        <GoogleLogin
          clientId="787746266033-3flsl4eh1ioia2g8olfqgu8okn618kuo.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <GitHubLogin
          clientId="16f1a3b9a49219368b0d"
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      </div>
    );
  }
}

export default App;
