import React, { useState, useRef, useEffect, useCallback } from "react";
import InputLine from "./InputLine";
import OutputLine from "./OutputLine";
import { runCommand, WELCOME_LINES } from "../data/commands";
import "../styles/terminal.css";

// ─────────────────────────────────────────────────────────────────────────────
//  Terminal
//  Props:
//    • theme    — current theme id string, e.g. "dracula"
//    • setTheme — setter function (string) → void
//    • themes   — THEMES array from App.jsx
// ─────────────────────────────────────────────────────────────────────────────

const PROMPT = "guest@harsh:~$";

const Terminal = ({ theme, setTheme, themes }) => {
  // ── State ──────────────────────────────────────────────────────────────────
  const [history, setHistory] = useState([
    { id: "welcome", input: null, lines: WELCOME_LINES },
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histCursor, setHistCursor] = useState(-1);
  const [inputValue, setInputValue] = useState("");

  const bottomRef = useRef(null);

  // ── Auto-scroll ────────────────────────────────────────────────────────────
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // ── Apply theme (for the `theme` command) ─────────────────────────────────
  const applyTheme = useCallback(
    (id) => {
      const found = themes.find((t) => t.id === id);
      if (!found) return false;
      setTheme(id);
      return true;
    },
    [themes, setTheme]
  );

  // ── Command submission ──────────────────────────────────────────────────────
  const handleSubmit = useCallback(
    (raw) => {
      const trimmed = raw.trim();
      const echoEntry = { id: `echo-${Date.now()}`, input: trimmed, lines: [] };

      if (!trimmed) {
        setHistory((h) => [...h, echoEntry]);
        setInputValue("");
        return;
      }

      setCmdHistory((prev) => (prev[0] === trimmed ? prev : [trimmed, ...prev]));
      setHistCursor(-1);

      const result = runCommand(trimmed, {
        setTheme: applyTheme,
        currentTheme: theme,
        themes,
      });

      if (result.clear) {
        setHistory([]);
        setInputValue("");
        return;
      }

      const outputEntry = {
        id: `out-${Date.now()}`,
        input: null,
        lines: result.lines || [],
      };

      setHistory((h) => [...h, echoEntry, outputEntry]);
      setInputValue("");
    },
    [theme, themes, applyTheme]
  );

  // ── Arrow-key history navigation ────────────────────────────────────────────
  const handleHistoryUp = useCallback(() => {
    setHistCursor((prev) => {
      const next = Math.min(prev + 1, cmdHistory.length - 1);
      setInputValue(cmdHistory[next] ?? "");
      return next;
    });
  }, [cmdHistory]);

  const handleHistoryDown = useCallback(() => {
    setHistCursor((prev) => {
      const next = Math.max(prev - 1, -1);
      setInputValue(next === -1 ? "" : cmdHistory[next] ?? "");
      return next;
    });
  }, [cmdHistory]);

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div
      className={`terminal-wrapper theme-${theme}`}
      onClick={() => document.querySelector(".input-hidden")?.focus()}
    >
      {/* ── Title Bar ──────────────────────────────────────────── */}
      <div className="terminal-titlebar">
        <div className="titlebar-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="titlebar-title">harsh@portfolio — terminal</span>
      </div>

      {/* ── Output area ────────────────────────────────────────── */}
      <div className="terminal-body">
        {history.map((entry) => (
          <div key={entry.id} className="history-entry">
            {entry.input !== null && (
              <div className="history-cmd">
                <span className="input-prompt">{PROMPT}</span>
                <span className="history-cmd-text">{entry.input}</span>
              </div>
            )}
            {entry.lines.map((line, i) => (
              <OutputLine key={i} line={line} />
            ))}
          </div>
        ))}

        {/* Active input */}
        <InputLine
          value={inputValue}
          onChange={setInputValue}
          onSubmit={handleSubmit}
          onHistoryUp={handleHistoryUp}
          onHistoryDown={handleHistoryDown}
          prompt={PROMPT}
          disabled={false}
        />
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default Terminal;
