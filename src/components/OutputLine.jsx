import React from "react";
import "../styles/terminal.css";

// ─────────────────────────────────────────────────────────────────────────────
//  OutputLine — renders a single "line" object from the command system.
//  Each line has a `type` that dictates its appearance.
// ─────────────────────────────────────────────────────────────────────────────

const OutputLine = ({ line }) => {
  if (!line) return null;

  switch (line.type) {
    /* ── ASCII art block ─────────────────────────────────────────────── */
    case "ascii":
      return <pre className="output-ascii">{line.text}</pre>;

    /* ── Section heading ─────────────────────────────────────────────── */
    case "heading":
      return <p className="output-heading">{line.text}</p>;

    /* ── Horizontal divider ──────────────────────────────────────────── */
    case "divider":
      return <div className="output-divider" />;

    /* ── Blank / empty line ──────────────────────────────────────────── */
    case "blank":
      return <div className="output-blank" />;

    /* ── Plain text ──────────────────────────────────────────────────── */
    case "text":
      return <p className="output-text">{line.text}</p>;

    /* ── Informational (cyan) ────────────────────────────────────────── */
    case "info":
      return <p className="output-info">{line.text}</p>;

    /* ── Success (green) ─────────────────────────────────────────────── */
    case "success":
      return <p className="output-success">{line.text}</p>;

    /* ── Error (red) ─────────────────────────────────────────────────── */
    case "error":
      return <p className="output-error">{line.text}</p>;

    /* ── help command — command + description ────────────────────────── */
    case "cmd":
      return (
        <div className="output-cmd-row">
          <span className="output-cmd-label">{line.label}</span>
          <span className="output-cmd-sep">—</span>
          <span className="output-cmd-desc">{line.desc}</span>
        </div>
      );

    /* ── skills command — category + chips ──────────────────────────── */
    case "skill-group":
      return (
        <div className="output-skill-group">
          <span className="output-skill-category">{line.category}</span>
          <div className="output-skill-chips">
            {line.items.map((item, i) => (
              <span key={i} className="output-skill-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      );

    /* ── projects command ────────────────────────────────────────────── */
    case "project":
      return (
        <div className="output-project-card">
          <div className="output-project-header">
            <span className="output-project-name">{line.name}</span>
            <span
              className={`output-project-status ${
                line.status === "Live" ? "status-live" : "status-wip"
              }`}
            >
              {line.status}
            </span>
          </div>
          <p className="output-project-desc">{line.desc}</p>
          <div className="output-project-tech">
            {line.tech.map((t, i) => (
              <span key={i} className="output-tech-chip">
                {t}
              </span>
            ))}
          </div>
          <a
            href={line.url}
            target="_blank"
            rel="noreferrer"
            className="output-project-link"
          >
            🔗 View on GitHub
          </a>
        </div>
      );

    /* ── experience command ──────────────────────────────────────────── */
    case "experience":
      return (
        <div className="output-exp-card">
          <div className="output-exp-header">
            <span className="output-exp-role">{line.role}</span>
            <span className="output-exp-period">{line.period}</span>
          </div>
          <span className="output-exp-company">@ {line.company}</span>
          <ul className="output-exp-points">
            {line.points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </div>
      );

    /* ── education command ───────────────────────────────────────────── */
    case "edu":
      return (
        <div className="output-edu-card">
          <span className="output-edu-degree">{line.degree}</span>
          <span className="output-edu-institute">{line.institute}</span>
          <div className="output-edu-meta">
            <span>{line.year}</span>
            <span className="output-edu-grade">{line.grade}</span>
          </div>
        </div>
      );

    /* ── contact command ─────────────────────────────────────────────── */
    case "contact":
      return (
        <div className="output-contact-row">
          <span className="output-contact-icon">{line.icon}</span>
          <span className="output-contact-label">{line.label}</span>
          <span className="output-contact-value">{line.value}</span>
        </div>
      );

    /* ── social / link ───────────────────────────────────────────────── */
    case "link":
      return (
        <div className="output-link-row">
          <span>{line.icon}</span>
          <a
            href={line.url}
            target="_blank"
            rel="noreferrer"
            className="output-link"
          >
            {line.label}
          </a>
          <span className="output-link-url">{line.url}</span>
        </div>
      );

    /* ── welcome banner ──────────────────────────────────────────────── */
    case "welcome-banner":
      return (
        <div className="welcome-banner">
          <pre className="welcome-ascii">{line.ascii}</pre>
          <div className="welcome-name-row">
            <span className="welcome-name">{line.name}</span>
            <span className="welcome-role">{line.role}</span>
          </div>
        </div>
      );

    /* ── welcome info row (label: value) ─────────────────────────────── */
    case "welcome-info":
      return (
        <div className="welcome-info-row">
          <span className="welcome-info-label">{line.label}</span>
          <span className="welcome-info-sep">:</span>
          {line.link ? (
            <a
              href={line.link}
              target="_blank"
              rel="noreferrer"
              className="welcome-info-link"
            >
              {line.value}
            </a>
          ) : (
            <span className="welcome-info-value">{line.value}</span>
          )}
        </div>
      );

    /* ── welcome tip line ────────────────────────────────────────────── */
    case "welcome-tip":
      return <p className="welcome-tip">{line.text}</p>;


    case "theme-row":
      return (
        <div className="output-theme-row">
          <span
            className="output-theme-swatch"
            style={{ background: line.swatch }}
          />
          <span className={`output-theme-name${line.active ? " output-theme-active" : ""}`}>
            {line.label}
          </span>
          <span className="output-theme-id">{line.id}</span>
          {line.active && <span className="output-theme-check">← current</span>}
        </div>
      );

    default:
      return <p className="output-text">{line.text || ""}</p>;
  }
};

export default OutputLine;
