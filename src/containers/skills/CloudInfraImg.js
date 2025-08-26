import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    // Responsive wrapper so sizing stays consistent with other skill images
    return (
      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          display: "block",
        }}
      >
        <img
          src={require("../../assets/images/robot_skill_cropp.svg")}
          alt="Robotics & Simulations"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
    );
  }
}
