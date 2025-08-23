import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />

        {/* Mini Education Section
        <div style={{ textAlign: "center", margin: "50px 0" }}>
          <h1 style={{ color: this.props.theme.text, fontSize: "36px" }}>
            Education
          </h1>
          <div
            style={{
              border: `1px solid ${this.props.theme.secondaryText}`,
              borderRadius: "10px",
              padding: "20px",
              maxWidth: "500px",
              margin: "20px auto",
            }}
          >
            <h2 style={{ color: this.props.theme.text }}>Bachelor of Applied Science</h2>
            <p style={{ color: this.props.theme.secondaryText }}>
              Integrated Engineering, Computer & Electrical Specialization <br />
              University of British Columbia <br />
              2019 – 2025
            </p>
          </div>
        </div> */}
        <div className="home-education">
          <h1 style={{ textAlign: "center", color: this.props.theme.text }}>
            Education
          </h1>
          <Educations theme={this.props.theme} />
        </div>

        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
