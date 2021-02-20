import React, { Component } from "react";

export default class Header extends Component {
  style_text = {
    color: "red",
    fontSize: "40px",
    backgroundColor: "black",
    opacity: "0.7",
  };

  render() {
    return <div style={this.style_text}>

        <p >TRY GLASSES APP ONLINE</p>
    </div>
  }
}
