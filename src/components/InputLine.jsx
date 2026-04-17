import React, { useEffect, useRef } from "react";
import "../styles/terminal.css";

// ─────────────────────────────────────────────────────────────────────────────
//  InputLine
//  Props:
//   • value        — current input string (controlled)
//   • onChange     — setter for value
//   • onSubmit     — called with the full input string on Enter
//   • onHistoryUp  — called when ↑ pressed (parent moves history cursor up)
//   • onHistoryDown— called when ↓ pressed (parent moves history cursor down)
//   • prompt       — the prompt prefix string, e.g. "guest@harsh:~$"
//   • disabled     — whether input is locked (e.g. during animation)
// ─────────────────────────────────────────────────────────────────────────────

const InputLine = ({
  value,
  onChange,
  onSubmit,
  onHistoryUp,
  onHistoryDown,
  prompt,
  disabled,
}) => {
  const inputRef = useRef(null);

  /* Auto-focus the hidden input whenever the terminal is clicked. */
  useEffect(() => {
    if (!disabled) inputRef.current?.focus();
  }, [disabled]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit(value);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      onHistoryUp();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      onHistoryDown();
    }
  };

  return (
    <div className="input-line" onClick={() => inputRef.current?.focus()}>
      {/* Prompt prefix */}
      <span className="input-prompt">{prompt}</span>

      {/*
        We use a visually hidden <input> + a mirrored display div trick so we
        can style a custom blinking cursor perfectly in sync with the typed text.
      */}
      <div className="input-display-wrapper">
        <span className="input-mirror">{value}</span>
        <span className="input-cursor" />

        <input
          ref={inputRef}
          className="input-hidden"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          aria-label="Terminal input"
        />
      </div>
    </div>
  );
};

export default InputLine;
