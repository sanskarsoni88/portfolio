import React, { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { detailedProjects } from "../../portfolio";
import "./ProjectDetail.css";

// helper: resolve filenames in portfolio.js -> actual imports from src/assets/images
function resolveMediaSrc(m) {
  try {
    return require(`../../assets/images/${m.src}`);
  } catch {
    return m.src; // fallback if it's already a URL
  }
}

function MediaCarousel({ items }) {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const cur = items[i];

  return (
    <div className="pd-carousel">
      <div className="pd-media">
        {cur.type === "image" ? (
          <img src={resolveMediaSrc(cur)} alt={cur.caption || "media"} />
        ) : (
          <video src={resolveMediaSrc(cur)} controls playsInline />
        )}
      </div>

      {cur.caption ? <div className="pd-caption">{cur.caption}</div> : null}

      {items.length > 1 && (
        <div className="pd-controls">
          <button onClick={prev} aria-label="Previous">
            ‹
          </button>
          <span>
            {i + 1} / {items.length}
          </span>
          <button onClick={next} aria-label="Next">
            ›
          </button>
        </div>
      )}
    </div>
  );
}

function MediaStack({ items }) {
  return (
    <div className="pd-stack">
      {items.map((m, idx) => (
        <div key={idx} className="pd-stack-item">
          {m.type === "image" ? (
            <img src={resolveMediaSrc(m)} alt={m.caption || "media"} />
          ) : (
            <video src={resolveMediaSrc(m)} controls playsInline />
          )}
          {m.caption ? <div className="pd-caption">{m.caption}</div> : null}
        </div>
      ))}
    </div>
  );
}

export default function ProjectDetail({ theme }) {
  const { id } = useParams();
  const project = useMemo(() => detailedProjects.find((p) => p.id === id), [
    id,
  ]);

  useEffect(() => window.scrollTo(0, 0), []);

  if (!project) {
    return (
      <div className="pd-wrap">
        <h1 style={{ color: theme?.text || "#111" }}>Project not found</h1>
        <Link to="/projects">← Back to Projects</Link>
      </div>
    );
  }

  const text = (c = {}) => ({ color: theme?.text || "#111", ...c });
  const subtle = (c = {}) => ({ color: theme?.secondaryText || "#666", ...c });

  return (
    <div className="pd-wrap">
      {/* Title + period across the top */}
      <div className="pd-header">
        <h1 style={text()}>{project.title}</h1>
        <div className="pd-period" style={subtle()}>
          {project.period}
        </div>
      </div>

      {/* Two-column layout */}
      <div className="pd-two-col">
        {/* LEFT: media */}
        <div className="pd-left">
          {project.media?.length ? (
            project.display === "stack" ? (
              <MediaStack items={project.media} />
            ) : (
              <MediaCarousel items={project.media} />
            )
          ) : null}
        </div>

        {/* RIGHT: sticky info */}
        <aside className="pd-right pd-sticky">
          {project.skills?.length ? (
            <div className="pd-skills">
              {project.skills.map((s, idx) => (
                <span key={idx} className="pd-skill-chip">
                  {s}
                </span>
              ))}
            </div>
          ) : null}

          {project.summary ? (
            <p className="pd-summary" style={subtle()}>
              {project.summary}
            </p>
          ) : null}

          <div className="pd-description" style={text()}>
            {project.description}
          </div>

          {project.links?.length ? (
            <div className="pd-links">
              {project.links.map((l, idx) => (
                <a
                  key={idx}
                  className="pd-link"
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          ) : null}

          <div className="pd-back">
            <Link to="/projects">← Back to Projects</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
