import React from "react";
import "./Project.css";
import Button from "../../components/button/Button";
import { greeting, detailedProjects } from "../../portfolio";
import LocalProjectCard from "../../components/projectCard/LocalProjectCard";

export default function Projects() {
  return (
    <div className="main" id="projects">
      <h1 className="project-title">Projects</h1>

      <div className="repo-cards-div-main">
        {detailedProjects.map((p) => (
          <LocalProjectCard key={p.id} project={p} />
        ))}
      </div>

      {/* optional: keep this button to GitHub profile if you still want a “More Projects” link */}
      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
      />
    </div>
  );
}
