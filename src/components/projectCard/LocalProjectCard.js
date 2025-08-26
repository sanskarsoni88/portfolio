import React from "react";
import { Link } from "react-router-dom";
import "./LocalProjectCard.css";

export default function LocalProjectCard({ project, theme }) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="repo-card-div"
      style={{ textDecoration: "none" }}
    >
      <div className="repo-name-div">
        <svg
          aria-hidden="true"
          className="octicon repo-svg"
          height="16"
          role="img"
          viewBox="0 0 12 16"
          width="12"
        >
          <path
            fillRule="evenodd"
            d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
          ></path>
        </svg>
        <p className="repo-name" style={{ color: theme.text }}>
          {project.title}
        </p>
      </div>

      <p className="repo-description" style={{ color: theme.text }}>
        {project.summary}
      </p>

      <div className="repo-details">
        <p
          className="repo-creation-date subTitle"
          style={{ color: theme.secondaryText }}
        >
          {project.period}
        </p>
      </div>

      {/* Skills preview styled same as Experience/Home */}
      {project.softwareSkills?.length ? (
        <div className="repo-skills">
          {project.softwareSkills.map((s, idx) => (
            <span
              key={idx}
              className="software-skill-inline"
              name={s.skillName}
            >
              <span
                className="iconify"
                data-icon={s.fontAwesomeClassname}
                style={s.style}
              ></span>
            </span>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
