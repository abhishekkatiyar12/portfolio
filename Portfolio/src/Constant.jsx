// data.js

// ================== Logos ==================
import htmlLogo from './assets/Tech_logo/html.png';
import cssLogo from './assets/Tech_logo/css.png';
import javascriptLogo from './assets/Tech_logo/javascript.jpg';
import reactLogo from './assets/Tech_logo/react.png';
import nodeLogo from './assets/Tech_logo/node.png';
import expressLogo from './assets/Tech_logo/express.jpg';
import mongodbLogo from './assets/Tech_logo/mongo.png';
import mysqlLogo from './assets/Tech_logo/mysql.png';
import bootstrapLogo from './assets/Tech_logo/bootstrap.jpg';
import javaLogo from './assets/Tech_logo/java.png';
import gitLogo from './assets/Tech_logo/git.jpg';
import githubLogo from './assets/Tech_logo/github.png';
import vscodeLogo from './assets/Tech_logo/vscode.jpg';
import postmanLogo from './assets/Tech_logo/postman.png';
import vercelLogo from './assets/Tech_logo/vercel.png';
import renderLogo from './assets/Tech_logo/render.png';

// Company Logos
import schoollogLogo from './assets/company_logo/schoollog_logo.png';

// Education Logos
import kietLogo from './assets/education_logo/kiet.jpg';
import csjmLogo from './assets/education_logo/csjm.png';
import gmisLogo from './assets/education_logo/gmis.jpg';

// Project Logos
import imgGenLogo from './assets/Work_logo/imagegenlogo.png';
import driveTrackerLogo from './assets/Work_logo/drive.jpg';
import greenloopLogo from './assets/Work_logo/greenloop.png';


// ================== Master Skills Object ==================
export const allSkills = {
  html: { name: "HTML", logo: htmlLogo },
  css: { name: "CSS", logo: cssLogo },
  javascript: { name: "JavaScript", logo: javascriptLogo },
  react: { name: "React.js", logo: reactLogo },
  node: { name: "Node.js", logo: nodeLogo },
  express: { name: "Express.js", logo: expressLogo },
  mongodb: { name: "MongoDB", logo: mongodbLogo },
  mysql: { name: "MySQL", logo: mysqlLogo },
  bootstrap: { name: "Bootstrap", logo: bootstrapLogo },
  java: { name: "Java", logo: javaLogo },
  git: { name: "Git", logo: gitLogo },
  github: { name: "GitHub", logo: githubLogo },
  vscode: { name: "VS Code", logo: vscodeLogo },
  postman: { name: "Postman", logo: postmanLogo },
  vercel: { name: "Vercel", logo: vercelLogo },
  render: { name: "Render", logo: renderLogo },
};


// ================== Skills Info ==================
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      allSkills.html,
      allSkills.css,
      allSkills.javascript,
      allSkills.react,
      allSkills.bootstrap,
    ],
  },
  {
    title: "Backend",
    skills: [
      allSkills.node,
      allSkills.express,
      allSkills.mongodb,
      allSkills.mysql,
    ],
  },
  {
    title: "Languages",
    skills: [
      allSkills.java,
      allSkills.javascript,
    ],
  },
  {
    title: "Tools",
    skills: [
      allSkills.git,
      allSkills.github,
      allSkills.vscode,
      allSkills.postman,
      allSkills.vercel,
      allSkills.render,
    ],
  },
];


// ================== Experiences ==================
export const experiences = [
  {
    id: 0,
    img: schoollogLogo,
    role: "Software Developer Intern",
    company: "Schoollog",
    date: "Nov 2024 – Present",
    desc: "Working on backend development using NestJS for projects such as GreenLoop. Responsible for building scalable APIs, database integration, and backend optimizations.",
    skills: [
      allSkills.node.name,
      allSkills.express.name,
      allSkills.mongodb.name,
      allSkills.java.name,
    ],
  },
  {
    id: 1,
    img: kietLogo,
    role: "Bootcamp Coordinator",
    company: "KIET MCA Dept.",
    date: "Sept 2024",
    desc: "Coordinated a 5-day LeetCode Bootcamp at KIET, mentoring peers in problem-solving and coding interview preparation.",
    skills: [allSkills.java.name, allSkills.javascript.name],
  },
];


// ================== Education ==================
export const education = [
  {
    id: 0,
    img: kietLogo,
    school: "KIET Group of Institutions, Ghaziabad",
    date: "2023 – 2025",
    grade: "Pursuing",
    degree: "Master of Computer Applications (MCA)",
    desc: "Currently pursuing MCA with focus on Full Stack Web Development, Data Structures, and Cloud-based applications.",
  },
  {
    id: 1,
    img: csjmLogo,
    school: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
    date: "2020 – 2023",
    grade: "Graduated",
    degree: "Bachelor of Computer Applications (BCA)",
    desc: "Completed graduation in Computer Applications with a strong foundation in programming and databases.",
  },
  {
    id: 2,
    img: gmisLogo,
    school: "Gaurav Memorial International School, Kanpur",
    date: "2018",
    grade: "83.4%",
    degree: "CBSE (XII) – PCM with Computer Science",
    desc: "Completed higher secondary education in Science stream.",
  },
];


// ================== Projects ==================
export const projects = [
  {
    id: 0,
    title: "Image Generator App",
    description:
      "Built with React, Node.js, and Express, this app integrates third-party APIs to generate images dynamically. Implemented secure authentication, REST APIs, and MongoDB storage.",
    image: imgGenLogo,
    tags: [allSkills.react, allSkills.node, allSkills.express, allSkills.mongodb],
    github: "https://github.com/abhishek-img-generator",
    webapp: "https://img-generator-umber.vercel.app/",
  },
  {
    id: 1,
    title: "Drive Tracker",
    description:
      "A Next.js app that enables students to share real-time location and images with professors to confirm placement arrival.",
    image: driveTrackerLogo,
    tags: [allSkills.react, allSkills.node],
    github: "https://github.com/abhishek-drive-tracker",
    webapp: "https://drive-tracker.vercel.app/",
  },
  {
    id: 2,
    title: "GreenLoop (College Project)",
    description:
      "Worked on backend development using NestJS and MongoDB for an e-waste management platform.",
    image: greenloopLogo,
    tags: [allSkills.node, allSkills.express, allSkills.mongodb],
    github: "https://github.com/abhishek-greenloop",
    webapp: "#",
  },
  {
    id: 3,
    title: "To-Do (Personal Project)",
    description:
      "A full-stack to-do app with authentication and MongoDB storage.",
    image: greenloopLogo, // replace with correct image if you have one
    tags: [allSkills.react, allSkills.node, allSkills.express, allSkills.mongodb],
    github: "https://github.com/abhishek-todo",
    webapp: "#",
  },

];
