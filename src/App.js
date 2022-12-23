import React, { Component } from "react";

import Header from "./components/Header";
import SocialMedia from "./components/SocialMedia";

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <SocialMedia />
      </div>
    )
  }
}

export default App;
