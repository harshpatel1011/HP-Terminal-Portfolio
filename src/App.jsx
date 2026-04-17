import React, { useState } from "react";
import Terminal from "./components/Terminal";
import "./index.css";

// ─────────────────────────────────────────────────────────────────────────────
//  THEMES — single source of truth shared across App → Terminal → commands
//  Each entry: { id, label, swatch (dot color shown in `themes` command) }
// ─────────────────────────────────────────────────────────────────────────────
export const THEMES = [
  { id: "dark",         label: "Dark",         swatch: "#0d1117" },
  { id: "light",        label: "Light",        swatch: "#f6f8fa" },
  { id: "dracula",      label: "Dracula",      swatch: "#bd93f9" },
  { id: "espresso",     label: "Espresso",     swatch: "#f0a500" },
  { id: "green-goblin", label: "Green Goblin", swatch: "#00ff41" },
  { id: "ubuntu",       label: "Ubuntu",       swatch: "#8ae234" },
  { id: "blue-matrix",  label: "Blue Matrix",  swatch: "#00ffff" },
];

// ─────────────────────────────────────────────────────────────────────────────
//  App — root component. Owns theme state, passes it to Terminal.
// ─────────────────────────────────────────────────────────────────────────────
const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`app-root theme-${theme}`}>
      <Terminal
        theme={theme}
        setTheme={setTheme}
        themes={THEMES}
      />
    </div>
  );
};

export default App;
