import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
// import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        {this.props.sections.map((section) => (
          <div key={section.title} className="experience-section">
            <h2 className="experience-title" style={{ color: theme.text }}>
              {section.title}
            </h2>
            <div className="experience-cards">
              {section.experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  index={index}
                  totalCards={section.experiences.length}
                  experience={experience}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ExperienceAccordion;
