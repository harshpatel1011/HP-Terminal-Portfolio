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
    { type: "text", text: "🎯  Full-Stack Web Developer" },
    {
      type: "text",
      text: "📍  Ahmedabad, Gujarat, India",
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
      items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
    },
    {
      type: "skill-group",
      category: "Logic Building",
      items: ["C Language", "C++ Language", "Data Structures & Algorithms"],
    },
    {
      type: "skill-group",
      category: "Tools & DevOps",
      items: ["Git", "GitHub", "VS Code", "Vite", "NPM"],
    },
    {
      type: "skill-group",
      category: "Currently Learning",
      items: ["React.js"],
    },
  ],

  // ── projects ─────────────────────────────────────────────────────────────
  projects: () => [
    { type: "heading", text: "Projects" },
    { type: "divider" },

    {
      type: "project",
      name: "Creative Hackathon Enquiry Portal",
      tech: ["React.js", "CSS", "JavaScript"],
      desc: "A hackathon enquiry portal where users can submit and manage event-related enquiries with a clean responsive UI.",
      url: "https://github.com/harshpatel1011/Creative-Hackathon-Enquiry-Portal",
      status: "Work in Progress",
    },

    {
      type: "project",
      name: "Rick and Morty API App",
      tech: ["React.js", "REST API", "CSS"],
      desc: "A React-based character explorer using the Rick and Morty API with dynamic data fetching.",
      url: "https://github.com/harshpatel1011/ReactJS-09-The-Rick-and-Morty-API",
      status: "Live",
    },

    {
      type: "project",
      name: "Calculator App",
      tech: ["React.js", "CSS"],
      desc: "A simple and responsive calculator application supporting basic arithmetic operations.",
      url: "https://github.com/harshpatel1011/ReactJS-06-Calculator",
      status: "Live",
    },

    {
      type: "project",
      name: "Tic Tac Toe Game",
      tech: ["React.js", "CSS"],
      desc: "Classic Tic Tac Toe game with interactive gameplay and responsive design.",
      url: "https://github.com/harshpatel1011/ReactJS-07-Tic-Tac-Toe",
      status: "Live",
    },

    {
      type: "project",
      name: "Number Puzzle Game",
      tech: ["React.js", "JavaScript", "CSS"],
      desc: "An engaging number puzzle game focused on logic, arrangement, and problem-solving skills.",
      url: "https://github.com/harshpatel1011/ReactJS-08-Number-Puzzle",
      status: "Live",
    },

    {
      type: "project",
      name: "To-Do List App",
      tech: ["React.js", "CSS", "Local Storage"],
      desc: "Task management application with add, edit, delete, and persistent local storage features.",
      url: "https://github.com/harshpatel1011/ReactJS-09-To-Do-List",
      status: "Live",
    },

    {
      type: "project",
      name: "Student Result Management",
      tech: ["React.js", "CSS", "JavaScript"],
      desc: "Student result management system to calculate marks, grades, and display academic performance.",
      url: "https://github.com/harshpatel1011/ReactJS-10-Student-Result",
      status: "Live",
    },
  ],

  // ── experience ───────────────────────────────────────────────────────────
  experience: () => [
    { type: "heading", text: "Work Experience" },
    { type: "divider" },
    {
      type: "experience",
      role: "Frontend Development Intern",
      company: "Creative Design & Multimedia Institute",
      period: "Nov 2025 – Apr 2026",
      points: [
        "Developed responsive web applications using React.js, HTML, CSS, and JavaScript.",
        "Created reusable UI components and improved website performance.",
        "Worked with APIs, React Hooks, and state management concepts.",
        "Collaborated with mentors and team members on real-world projects.",
      ],
    },
  ],

  // ── education ────────────────────────────────────────────────────────────
  education: () => [
    { type: "heading", text: "Education" },
    { type: "divider" },
    {
      type: "edu",
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "Swarrnim Startup & Innovation University, Gandhinagar",
      year: "2025 – Present",
      grade: "CGPA: 7.48",
    },
    {
      type: "edu",
      degree: "Higher Secondary (12th Commerce)",
      institute: "Sheth Nanubhai Vidhyamandir, Ahmedabad",
      year: "2023 – 2025",
      grade: "54.28%",
    },
  ],

  // ── contact ──────────────────────────────────────────────────────────────
  contact: () => [
    { type: "heading", text: "Contact Me" },
    { type: "divider" },
    { type: "contact", icon: "📧", label: "Email", value: "harshpatel6342@gmail.com" },
    { type: "contact", icon: "📱", label: "Phone", value: "+91 9104222588" },
    { type: "contact", icon: "📍", label: "Location", value: "Ahmedabad, Gujarat, India" },
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
      url: "https://github.com/harshpatel1011",
    },
    {
      type: "link",
      icon: "💼",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/harshpatel1111/",
    },
    {
      type: "link",
      icon: "🌐",
      label: "Portfolio",
      url: "https://hp-terminal-portfolio.vercel.app/",
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
  { type: "welcome-info", label: "Name", value: "Harsh Patel" },
  { type: "welcome-info", label: "Role", value: "Full-Stack Developer" },
  { type: "welcome-info", label: "Location", value: "Ahmedabad, Gujarat, India" },
  { type: "welcome-info", label: "GitHub", value: "github.com/harshpatel1011", link: "https://github.com/harshpatel1011" },
  { type: "welcome-info", label: "Email", value: "harshpatel6342@gmail.com" },
  { type: "blank" },
  { type: "welcome-tip", text: 'Type "help" for a list of available commands.' },
  { type: "welcome-tip", text: 'Type "about" to learn more about me.' },
  { type: "divider" },
];

export const WELCOME_LINES = WELCOME_OUTPUT;

// Also expose as a re-runnable command
export const WELCOME_COMMAND_OUTPUT = WELCOME_OUTPUT;

