import project2 from "../assets/projects/project-2.jpg";
import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


//Use Title, technologies, description and Image keys for the projects portion.

export const resumeData ={
  name: "Majik Hudson",
  email: "majikhudson@gmail.com",
  website: "https://mjk-hudson.github.io/my_portfolio/",
  linkedin: "www.linkedin.com/in/majik-hudson",
};

export const Experience= [
  {
    dateRange: "February 2026 – June 2026",
    role: "Product Designer – AI Fintech",
    company: "Independent Self-Directed Project New York City,N.Y.",
    description: "Designed and prototyped Bledger, a mobile budgeting app for gig workers using AI nudges and gamified savings to prevent overspending. Led full UX cycle: user research (50+ interviews), Figma prototypes with micro-interactions, WCAG 2.1 AA compliance, and on-device AI (TensorFlow Lite). Simulated testing projected 25% engagement increase; created ethical-AI-focused portfolio case study."
  },
  {
    dateRange: "May 2025 – November 2025",
    role: "Product Designer – Conferencing & Collaboration Queue tool",
    company: "Independent Self-Directed Project New York City,N.Y.",
    description: "Created Vibespace, a responsive conferencing and collaboration tool for the web, with vibe-matching, mood quizzes, dynamic alerts, and sustainability features (carbon calculator, green badges). Built Webflow prototypes and tested accessibility; achieved 28% conversion uplift in prototypes. Delivered live demo and eco-conscious case study."
  },
  // {
  //   dateRange: "October 2024 – April 2025",
  //   role:  "Freelance UX/Product Designer – Project Pending and will replace this entry once completed",
  {
    dateRange: "March 2023 – October 2024",
    role: "Senior Experience Designer",
    company: "Bank of America (Hybrid)",
    description: "Optimized workflows for a major portfolio, co-designing the bank's first digital wallet (93% adoption in testing). Delivered full-spectrum deliverables (IA, flows, wireframes, hi-fi designs, prototypes) while using data and testing to shape journeys—e.g., created digital card notification flow (87% preference). Led cross-functional updates for 2025 FDIC signage compliance across all digital channels."
  },
  {
    dateRange: "June 2022 – August 2022",
    role: "UX Designer - Social Good and Community Engagement application",
    company: "Independent Self-Directed Project New York City,N.Y.",
    description: "Designed responsive website for location-based community space discovery, generating 500+ user interest in 3 months. Managed Lean UX process (journeys, sketches, prototypes, studies); A/B tested with 6 participants to achieve 30% NPS increase and strong case study."
  }
];

export const Skills = [
  {
    dateRange: null, // N/A – ongoing
    role: "Soft Skills",
    company: null,
    description: "Collaboration, Feedback, Communication, Creative Thinking, Creative Problem Solving, Empathy, Critical Thinking, Adaptability, Collaboration, Leadership, Time Management, Teamwork"
  },
  {
    dateRange: null, // N/A – ongoing
    role: "Technical Skills",
    company: null,
    description: "Design Thinking, Lean UX, Double Diamond, User-Centered Design, Agile UX, Product Design, Storyboarding, Artificial Intelligence (A.I.), User interface design, Visual Design, Motion Design, User Research, Testing, Ideation, Prototyping, Low Fidelity, High Fidelity, Wireframing, Mockups, Information Architecture, User Flows, User Journeys, Usability studies, design sprints, Interaction Design, Design Systems, Responsive Design,  Inclusive Design, Front-End web development, HTML5, CSS3, JavaScript, React Native, React.js."
  },
  {
    role: "Software",
    description: "Figma, FigJam, Figma Make, Figma Weavy A.I., Adobe Photoshop, Adobe XD, Framer, Adobe Illustrator, Adobe InDesign, JIRA, Sketch, Google Workspace, Microsoft Office, Confluence, Claude Code, VS Code, Node.js, Mongo Db, Webpack, Motion.dev, Tailwind CSS, Bootstrap, Git."
  }
];

export const Education = [
  {
    dateRange: "September 2010 – May 2013",
    role: "B.S. Industrial Design",
    company: "University of Bridgeport – Shintaro Akatsu School of Design (SASD)",
    description: "IDSA NY Chapter member; Presidents’ Scholar 2013."
  },
  {
    dateRange: "August 2021 – July 2022",
    role: "Google UX Design Certificate",
    company: "Coursera",
    description: "User Experience Design program covering UX/UI design, responsive web, wireframing, prototyping, user research & testing, journey mapping, empathy maps, ideation, storyboarding, personas, and design frameworks. Mastered Figma and Adobe XD. Produced Online portfolio."
  },
  {
    dateRange: "May 2024 – November 2024",
    role: "IBM Front-End Web Developer Professional Certificate",
    company: "Coursera",
    description: "Front-End Web and Application Development: Using Meta’s React and React.js platform.Component-Based Architecture: Built dynamic user interfaces using modular building blocks, covering both traditional class components and modern functional components. State and Props Management: I can pass data down through your application using props, and manage interactive, changing data within individual components using states. React Hooks: Hands-on experience using built-in React hooks to manage component lifecycles and side effects smoothly without needing to write class components. Event Handling and Forms: I can capture user interactions, listen for browser events, and efficiently manage and validate user input from forms. Global State with Redux: Experience with Redux (specifically Redux Toolkit) to help you centralize and manage global application state as applications grow. Practical Application Building: I’ve built several digital product and service concepts through hands-on projects, typically culminating in building fully functional front-end applications like a web based store front with a shopping cart and a mobile budgeting A.I. application."
  },
];





export const Projects = [
  {
    title: "Budget Wise (A.I. Fintech)",
    image: project1,
    description:"Mobile budgeting app for gig workers using AI nudges and gamified savings to prevent overspending.",
    technologies: ['Figma', 'HTML', "CSS", "React", "Node.js", "MongoDB", 'Tailwind CSS',],
  },
  {
    title: "Social A.R. Entertainment",
    image: project2,
    description:
      "a mobile app for film fans featuring AR scene remixing, collaborative playlists, and mood-based discovery.",
    technologies: ["Figma", "HTML", "CSS", "Javascript", "React", "Tailwind CSS"],
  },
  {
    title: "Investment Dashboard",
    image: project3,
    description:
      "A responsive web dashboard for novice information investors with scenario sliders, narrative risk profiles, ESG scores, and offline PWA support.",
    technologies: ["Figma", "HTML", "CSS", "React", "Tailwind CSS", "Webpack"],
  },
  {
    title: "Neighborgood (New York, N.Y.)",
    image: project4,
    description:
      "A responsive web platform for location-based community space discovery.",
    technologies: ["Figma", "HTML", "CSS", "React", "Node.js", "Mongodb"],
  },
];

export const Contact = {
  address: "605 W42nd St., New York, NY 10036 ",
  phoneNo: "917 652-9826",
  email: "majikhudson@gmail.com",
};
