// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Experience Section Logo's
import unifiedMentorlogo from './assets/company_logo/unifiedMentorlogo.png';

// Education Section Logo's
import DSEU from './assets/education_logo/DSEU_IMAGE.jpeg';
import DOE from './assets/education_logo/DOE.jpeg';


// Project Section Logo's
import shikshakul from './assets/work_logo/shikshakul.png';
import chatapp from './assets/work_logo/chatapp.png';
import weatherapp from './assets/work_logo/weatherapp.png';
import vag from './assets/work_logo/vag.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: unifiedMentorlogo,
      role: "Web developer Intern",
      company: "Unified Mentor ",
      date: "April 2025 - July 2025",
      desc: "Developed dynamic and scalable web applications using the HTML,CSS,JAVASCRIPT,REACT.JS,NODE.JS handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: DSEU,
      school: "G.B PANT ENGINEERING COLLEGE DSEU ",
      date: "August 2022 - Present",
      desc: "I am pursuing my B.Tech in Computer Science and Engineering from G.B. Pant Engineering College, DSEU. During my studies, I have gained strong practical experience in web development and software engineering by working on real-world projects like Shiksha-kul. My college journey has helped me grow as a developer and strengthened my interest in building impactful applications."

    },

    {
      id: 1,
      img: DOE,
      school: "RAJKIYA PRATIBHA VIKAS VIDHYALYA,DWARKA",
      date: "September 2020 - March 2022",
      desc: "I completed my Class 12 education from RPVV Sector 5, Dwarka (CBSE) with PCM and Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: DOE,
      school: "GOVERNMENT BOYS SENIOR SECONDARY SCHOOL NO.1 , MOHAN GARDEN",
      date: "Apr 2019 - March 2020",
      desc: "I completed my class 10 education from G.B.S.S.S NO.1 , MOHAN GARDEN, under the CBSE board, where I studied Math and Science with English.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "SHIKSHA-KUL AN AI TEACHING ASSISTANT",
      description:
        "A classroom platform for managing classes, attendance, assignments, announcements, and real-time chat, with teacher–student dashboards and an integrated AI chatbot.",
      image: shikshakul,
      tags: ["HTML", "CSS", "JavaScript", "PHP", "API"],
      github: "https://github.com/Feyaz71/Shiksha-kul",
      webapp: "https://shiksha-kul.kesug.com/",
    },
    {
      id: 1,
      title: "CHAT APP - CHAT YOUR LOVE ONE",
      description:
        "A real-time Node.js + Socket.io chat app where users join rooms and chat instantly without login or data storage.",
      image: chatapp,
      tags: ["HTML", "CSS", "Node.js",  "Express",  "JavaScript"],
      github: "https://github.com/Feyaz71/CHAT-APP",
      webapp: "https://chat-app-2-sdbb.onrender.com/",
    },

    {
      id: 2,
      title: "WEATHER APP",
      description:
        "A simple app that shows real-time weather details for any city using API-based data.",
      image: weatherapp,
      tags: ["HTML", "CSS", "Open weather API",  "JavaScript"],
      github: "https://github.com/Feyaz71/WEATHER-NINJA",
      webapp: "https://feyaz71.github.io/WEATHER-NINJA/",
    },

    {
      id: 3,
      title: "Virtual Art Gallery",
      description:
        "A minimal online gallery for browsing and viewing artworks digitally.",
      image: vag,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Feyaz71/Virtual-art-gallery",
      webapp: "https://feyaz71.github.io/Virtual-art-gallery/",
    },
    
  ];  