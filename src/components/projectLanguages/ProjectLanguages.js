import React, { Component } from "react";
import "./ProjectLanguages.css";

class ProjectLanguages extends Component {
  render() {
    return (
      <div>
        <div className="project-languages-main-div">
          <ul className="dev-icons-languages">
            {this.props.logos.map((logo, idx) => {
              return (
                <li
                  key={idx}
                  className="project-skill-icon"
                  title={logo.name} // 👈 native hover tooltip
                >
                  <span
                    className="iconify"
                    data-icon={logo.iconifyClass}
                    style={logo.style}
                  ></span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectLanguages;
