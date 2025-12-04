// lib/portfolio-data.js

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Kimhout Theam",
    title: "a Software Developer",
    tagline: "Building your dream pixel by pixel!",
    description:
      "I'm a passionate Software Developer, currently finished advanced software training at the Korea Software HRD Center (13th Generation, ITE).",
    profileImage: "/kimhout-image.jpg",
  },

  // About Section
  about: {
    heading: "Why hire me for your",
    headingHighlight: "next project?",
    description:
      "I am a professional with a degree in computer science, and completed advanced software training at the Korea Software HRD Center (13th Generation, ITE) in Data Analytics.",
    stats: {
      yearsExperience: "0+",
      projectsCount: "3",
    },
    buttons: {
      // portfolio: {
      //   text: "Portfolio",
      //   href: "#projects",
      // },
      cv: {
        text: "Download CV",
        href: "/kimhout-cv.pdf", // Change this to your actual filename
      },
    },
  },

  // Education
  education: [
    {
      date: "2025 - Present",
      title: "IT Expert",
      institution: "Korea Software HRD Center",
    },
    {
      date: "September 27, 2024",
      title: "Pre-University Program (Web Development)",
      institution:
        "Institution of Science and Technology Advanced Development (ISTAD)",
    },
    {
      date: "2021 – 2025",
      title: "Bachelor of Science in Computer Science",
      institution: "Royal University of Phnom Penh",
    },
  ],

  // Professional Experience
  experience: [
    {
      date: "2023 - 2025",
      title: "Shop Assistant",
      company: "SKINURI",
    },
    {
      date: "2022 - 2023",
      title: "Barista",
      company: "The Coffee Bean and Tea Leaf",
    },
  ],

  // Skills
  skills: {
    tabs: ["Front-end", "Back-end", "Web Development"],
    skillsByCategory: {
      "Front-end": [
        { name: "HTML5", level: 95 },
        { name: "CSS", level: 95 },
        { name: "JavaScript", level: 70 },
        { name: "Tailwind CSS", level: 90 },
      ],
      "Back-end": [
        { name: "Python", level: 75 },
        { name: "Spring Boot", level: 70 },
        { name: "FastAPI", level: 70 },
        { name: "PostgreSQL", level: 70 },
      ],
      "Web Development": [
        { name: "Next.js", level: 90 },
        { name: "React", level: 90 },
        { name: "RESTful APIs", level: 85 },
      ],
    },
    tools: [
      { name: "Visual Studio Code", icon: "💻" },
      { name: "Git", icon: "🔧" },
      { name: "GitHub", icon: "📦" },
      { name: "Figma", icon: "🎨" },
    ],
  },

  // Projects
  projects: [
    {
      title: "RippleEco",
      description:
        "RippleEco is a web-based platform designed to promote environmental protection and community action using technology. Key features include action pledging, and realtime air quality/disaster alerts.",
      technologies: ["Next.js", "Spring Boot", "PostgreSQL"],
      github: "https://github.com/Th-Kimhout",
      demo: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "SQLyst",
      description:
        "SQLyst is a web-based data analysis platform that allows non-technical users to efficiently interact with their datasets using natural language, streamline data analysis to help businesses make faster, data-driven decisions. Key features include AI Chatbot, Quick Report Generation and Sale/Purchase Forecasting.",
      technologies: [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "LangChain",
        "vLLM",
        "LangGraph",
      ],
      github: "https://github.com/Th-Kimhout",
      demo: "#",
      gradient: "from-blue-500 to-purple-500",
    },
  ],
};
