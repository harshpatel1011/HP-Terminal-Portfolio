// ─────────────────────────────────────────────────────────────────────────────
//  commands.js — single source of truth for all terminal commands
//  Each command returns an array of "line" objects rendered by OutputLine.jsx
// ─────────────────────────────────────────────────────────────────────────────

export const COMMANDS = {
  // ── help ─────────────────────────────────────────────────────────────────
  help: () => [
    { type: "heading", text: "Available Commands" },
    { type: "divider" },
    { type: "cmd", label: "help", desc: "Show this help menu" },
    { type: "cmd", label: "welcome", desc: "Show the welcome screen again" },
    { type: "cmd", label: "about", desc: "Learn about me" },
    { type: "cmd", label: "skills", desc: "My technical skills" },
    { type: "cmd", label: "projects", desc: "View my projects" },
    { type: "cmd", label: "experience", desc: "Work experience" },
    { type: "cmd", label: "education", desc: "Educational background" },
    { type: "cmd", label: "contact", desc: "Get in touch with me" },
    { type: "cmd", label: "social", desc: "Find me on social media" },
    { type: "cmd", label: "date", desc: "Show current date & time" },
    { type: "cmd", label: "echo [text]", desc: "Print custom text" },
    { type: "cmd", label: "theme [name]", desc: "Switch terminal theme" },
    { type: "cmd", label: "themes", desc: "List all available themes" },
    { type: "cmd", label: "clear", desc: "Clear the terminal" },
    { type: "divider" },
    {
      type: "info",
      text: "Tip: Use ↑ ↓ arrow keys to navigate command history.",
    },
  ],

  // ── about ────────────────────────────────────────────────────────────────
  about: () => [
    { type: "heading", text: "About Me" },
    { type: "divider" },
    { type: "text", text: "👨‍💻  Harsh Patel" },
    { type: "text", text: "🎯  Full-Stack Developer & UI/UX Enthusiast" },
    {
      type: "text",
      text: "📍  Surat, Gujarat, India",
    },
    { type: "blank" },
    {
      type: "text",
      text: "I craft pixel-perfect web experiences with a passion for clean",
    },
    {
      type: "text",
      text: "code, scalable architecture, and intuitive user interfaces.",
    },
    {
      type: "text",
      text: "Currently focused on React, Node.js, and modern web technologies.",
    },
    { type: "blank" },
    {
      type: "info",
      text: 'Type "skills" or "projects" to explore more.',
    },
  ],

  // ── skills ───────────────────────────────────────────────────────────────
  skills: () => [
    { type: "heading", text: "Technical Skills" },
    { type: "divider" },
    {
      type: "skill-group",
      category: "Frontend",
      items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap"],
    },
    {
      type: "skill-group",
      category: "Backend",
      items: ["Node.js", "Express.js", "Python", "Flask", "REST APIs"],
    },
    {
      type: "skill-group",
      category: "Database",
      items: ["MongoDB", "MySQL", "SQLite", "Firebase"],
    },
    {
      type: "skill-group",
      category: "Tools & DevOps",
      items: ["Git", "GitHub", "VS Code", "Figma", "Vite", "NPM"],
    },
    {
      type: "skill-group",
      category: "Currently Learning",
      items: ["TypeScript", "Next.js", "Docker", "AWS"],
    },
  ],

  // ── projects ─────────────────────────────────────────────────────────────
  projects: () => [
    { type: "heading", text: "Projects" },
    { type: "divider" },
    {
      type: "project",
      name: "Terminal Portfolio",
      tech: ["React.js", "CSS", "Vite"],
      desc: "An interactive terminal-themed developer portfolio built in React.",
      url: "https://github.com/harshpatel",
      status: "Live",
    },
    {
      type: "project",
      name: "ShareTrade Dark",
      tech: ["React.js", "Bootstrap 5", "Chart.js"],
      desc: "A responsive share market tracking website with dark mode & Indian stocks.",
      url: "https://github.com/harshpatel",
      status: "Live",
    },
    {
      type: "project",
      name: "Admin CRM Dashboard",
      tech: ["React.js", "Python Flask", "SQLite"],
      desc: "Full-stack admin dashboard with demo management, CRUD operations & email automations.",
      url: "https://github.com/harshpatel",
      status: "Live",
    },
    {
      type: "project",
      name: "E-Commerce Platform",
      tech: ["React.js", "Node.js", "MongoDB"],
      desc: "Feature-rich e-commerce app with auth, cart, payment gateway integration.",
      url: "https://github.com/harshpatel",
      status: "WIP",
    },
  ],

  // ── experience ───────────────────────────────────────────────────────────
  experience: () => [
    { type: "heading", text: "Work Experience" },
    { type: "divider" },
    {
      type: "experience",
      role: "Frontend Developer Intern",
      company: "Creative Institute",
      period: "2024 – Present",
      points: [
        "Built responsive React dashboards with real-time data.",
        "Collaborated on UI/UX design using Figma and CSS animations.",
        "Implemented RESTful API integrations and Flask backends.",
      ],
    },
    {
      type: "experience",
      role: "Freelance Web Developer",
      company: "Self-employed",
      period: "2023 – 2024",
      points: [
        "Delivered 5+ client websites using React, HTML & CSS.",
        "Optimized performance achieving 90+ Lighthouse scores.",
        "Handled end-to-end project lifecycle from design to deployment.",
      ],
    },
  ],

  // ── education ────────────────────────────────────────────────────────────
  education: () => [
    { type: "heading", text: "Education" },
    { type: "divider" },
    {
      type: "edu",
      degree: "B.Tech – Computer Science & Engineering",
      institute: "Marwadi University, Rajkot",
      year: "2022 – 2026",
      grade: "CGPA: 8.4",
    },
    {
      type: "edu",
      degree: "Higher Secondary (12th Science)",
      institute: "Shree Swaminarayan Gurukul, Surat",
      year: "2020 – 2022",
      grade: "85%",
    },
  ],

  // ── contact ──────────────────────────────────────────────────────────────
  contact: () => [
    { type: "heading", text: "Contact Me" },
    { type: "divider" },
    { type: "contact", icon: "📧", label: "Email", value: "harsh@example.com" },
    { type: "contact", icon: "📱", label: "Phone", value: "+91 98765 43210" },
    { type: "contact", icon: "📍", label: "Location", value: "Surat, Gujarat, India" },
    { type: "blank" },
    {
      type: "info",
      text: 'Type "social" to see my social media profiles.',
    },
  ],

  // ── social ───────────────────────────────────────────────────────────────
  social: () => [
    { type: "heading", text: "Social Media" },
    { type: "divider" },
    {
      type: "link",
      icon: "🐙",
      label: "GitHub",
      url: "https://github.com/harshpatel",
    },
    {
      type: "link",
      icon: "💼",
      label: "LinkedIn",
      url: "https://linkedin.com/in/harshpatel",
    },
    {
      type: "link",
      icon: "🐦",
      label: "Twitter / X",
      url: "https://twitter.com/harshpatel",
    },
    {
      type: "link",
      icon: "🌐",
      label: "Portfolio",
      url: "https://harshpatel.dev",
    },
  ],

  // ── date ─────────────────────────────────────────────────────────────────
  date: () => {
    const now = new Date();
    return [
      { type: "heading", text: "Date & Time" },
      { type: "divider" },
      { type: "text", text: `📅  Date   : ${now.toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}` },
      { type: "text", text: `🕐  Time   : ${now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}` },
      { type: "text", text: `🌍  Locale : India (IST, UTC+5:30)` },
    ];
  },

  // ── theme ─────────────────────────────────────────────────────────────────
  theme: (args, { setTheme, currentTheme, themes }) => {
    const id = args[0]?.toLowerCase().replace(/_/g, "-");
    if (!id) {
      // No arg — show list
      return [
        { type: "heading", text: "Available Themes" },
        { type: "divider" },
        ...(themes || []).map((t) => ({
          type: "theme-row",
          id: t.id,
          label: t.label,
          swatch: t.swatch,
          active: t.id === currentTheme,
        })),
        { type: "blank" },
        { type: "info", text: 'Usage: theme [name]  —  e.g. theme dracula' },
      ];
    }
    const ok = setTheme(id);
    if (!ok) {
      return [
        { type: "error", text: `Unknown theme: "${id}". Type "themes" to see options.` },
      ];
    }
    return [{ type: "success", text: `✅  Theme switched to "${id}".` }];
  },

  // ── themes ───────────────────────────────────────────────────────────────
  themes: (args, { currentTheme, themes }) => [
    { type: "heading", text: "Available Themes" },
    { type: "divider" },
    ...(themes || []).map((t) => ({
      type: "theme-row",
      id: t.id,
      label: t.label,
      swatch: t.swatch,
      active: t.id === currentTheme,
    })),
    { type: "blank" },
    { type: "info", text: 'Type "theme [name]" to switch  —  e.g. theme dracula' },
  ],

  // ── welcome ───────────────────────────────────────────────────────────────
  welcome: () => WELCOME_OUTPUT,

  // ── echo ─────────────────────────────────────────────────────────────────
  echo: (args) => {
    if (!args.length)
      return [{ type: "error", text: 'Usage: echo [text]  —  e.g. echo Hello World!' }];
    return [{ type: "text", text: args.join(" ") }];
  },

  // ── clear is handled in Terminal.jsx ────────────────────────────────────
};

// ─────────────────────────────────────────────────────────────────────────────
//  parseCommand — splits raw input into { cmd, args }
// ─────────────────────────────────────────────────────────────────────────────
export const parseCommand = (input) => {
  const parts = input.trim().split(/\s+/);
  return { cmd: parts[0].toLowerCase(), args: parts.slice(1) };
};

// ─────────────────────────────────────────────────────────────────────────────
//  runCommand — executes a command and returns output lines
// ─────────────────────────────────────────────────────────────────────────────
export const runCommand = (input, themeHelpers) => {
  const { cmd, args } = parseCommand(input);

  if (cmd === "clear") return { clear: true };

  if (COMMANDS[cmd]) {
    const output = COMMANDS[cmd](args, themeHelpers);
    return { lines: output };
  }

  return {
    lines: [
      {
        type: "error",
        text: `Command not found: "${cmd}". Type "help" to see available commands.`,
      },
    ],
  };
};

// ─────────────────────────────────────────────────────────────────────────────
//  WELCOME_LINES — rich satnaing.dev–style welcome printed on first mount
//  & re-runnable via the `welcome` command
// ─────────────────────────────────────────────────────────────────────────────

const WELCOME_OUTPUT = [
  {
    type: "welcome-banner",
    name: "Harsh Patel",
    role: "Full-Stack Developer",
    ascii: `
██╗  ██╗ █████╗ ██████╗ ███████╗██╗  ██╗
██║  ██║██╔══██╗██╔══██╗██╔════╝██║  ██║
███████║███████║██████╔╝███████╗███████║
██╔══██║██╔══██║██╔══██╗╚════██║██╔══██║
██║  ██║██║  ██║██║  ██║███████║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
██████╗  █████╗ ████████╗███████╗██╗     
██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██║     
██████╔╝███████║   ██║   █████╗  ██║     
██╔═══╝ ██╔══██║   ██║   ██╔══╝  ██║     
██║     ██║  ██║   ██║   ███████╗███████╗
╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝
`,
  },
  { type: "blank" },
  { type: "welcome-info", label: "Name",     value: "Harsh Patel" },
  { type: "welcome-info", label: "Role",     value: "Full-Stack Developer & UI/UX Enthusiast" },
  { type: "welcome-info", label: "Location", value: "Surat, Gujarat, India" },
  { type: "welcome-info", label: "GitHub",   value: "github.com/harshpatel",  link: "https://github.com/harshpatel" },
  { type: "welcome-info", label: "Email",    value: "harsh@example.com" },
  { type: "blank" },
  { type: "welcome-tip",  text: 'Type "help" for a list of available commands.' },
  { type: "welcome-tip",  text: 'Type "about" to learn more about me.' },
  { type: "divider" },
];

export const WELCOME_LINES = WELCOME_OUTPUT;

// Also expose as a re-runnable command
export const WELCOME_COMMAND_OUTPUT = WELCOME_OUTPUT;

