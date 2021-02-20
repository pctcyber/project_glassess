import React, { Component } from "react";
import Glasses_Model from "./Glasses_Model";
import Header from "./Header";

export default class BPState_Props extends Component {
  render() {
    let styel_1 = {
      backgroundImage: "url(./img/glassesImage/background.jpg)",
      backgroundSize: "cover",
      height: "1500px",
      backgroundPosition: "center",
    };

    return (
      <div>
        <div  style={styel_1}>
          <Header />
          <Glasses_Model/>
        </div>
      </div>
    );
  }
}
