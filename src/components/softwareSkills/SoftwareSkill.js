import React from "react";
import "./SoftwareSkill.css";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {this.props.logos.map((logo, idx) => (
            <li
              key={idx}
              className="software-skill-icon"
              title={logo.skillName} // ✅ native tooltip
            >
              {logo.fontAwesomeClassname && (
                <span
                  className="iconify"
                  data-icon={logo.fontAwesomeClassname}
                  style={logo.style}
                  data-inline="false"
                ></span>
              )}
              {!logo.fontAwesomeClassname && logo.imageSrc && (
                <img
                  className="skill-image"
                  style={logo.style}
                  src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                  alt={logo.skillName}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SoftwareSkill;
