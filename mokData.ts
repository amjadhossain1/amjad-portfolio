import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./type";
import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b>, <b>Next.js</b>",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Node.js </b> <b>Express.js </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust  REST API using <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>Codewars</b>",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>, <b>Adobe XD</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Type Script",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Next js",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Material UI",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "60",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Github",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Adobe XD",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "35",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 2,
    name: "Algorithm Visualizer",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    category: ["react"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    id: 3,
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "mongo", "react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    id: 4,
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
    category: ["node", "react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    id: 5,
    name: "Tweeter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["django", "react"],
    description:
      "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
    key_techs: ["React", "Django", "Django REST API"],
  },

  {
    id: 6,
    name: "Color Classification using tf.js",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/Dey-Sumit/color-classification",
    category: ["express"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    id: 7,
    name: "YouTube using YouTube ",
    image_path: "/images/youtubeClone.png",
    deployed_url: "https://not-utube.web.app/",
    github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
    category: ["express"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Redux",
      "Firebase Auth",
      "YouTube API",
      "Sass",
      "Bootstrap",
    ],
  },
  {
    id: 8,
    name: "Football App",
    image_path: "/images/football.png",
    deployed_url: "https://o-my-goal.web.app/",
    github_url: "https://github.com/Dey-Sumit/football-app",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },

  //


  {
    id: 2,
    name: "Twitter Clone",
    image_path: "/images/tweetme.jpg",
    deployed_url: "https://amjadhossain1.github.io/issue-tracker",
    github_url: "https://github.com/amjadhossain1/athena-design-responsive",
    category: ["react"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat similique corporis hic. Nulla quo voluptas culpa reprehenderit adipisci recusandae nostrum aperiam sunt, dolore voluptatibus vel! Error aut fugit cupiditate enim!",
    key_techs: [
      "React JS",  
      "React Router Dom", 
      "Bootstrap",   
    ],
  },

  {
    id: 3,
    name: "React Admin Dashboard",
    image_path: "/images/react-dashboard.PNG",
    deployed_url: "https://react-admin-dashboard-practice.netlify.app",
    github_url: "https://github.com/amjadhossain1/react-admin-dashboard",
    category: ["react"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat similique corporis hic. Nulla quo voluptas culpa reprehenderit adipisci recusandae nostrum aperiam sunt, dolore voluptatibus vel! Error aut fugit cupiditate enim!",
    key_techs: [
      "React",  
      "React Icons",  
      "React Router Dom" , 
      "React Overlays",
      "Bootstrap",
    ],
  },

  {
    id: 4,
    name: "Amar Somy Clint",
    image_path: "/images/amar-somy.PNG",
    deployed_url: "https://jugantor-clint.firebaseapp.com/",
    github_url: "https://github.com/amjadhossain1/amar-somy-clint",
    category: ["react"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat similique corporis hic. Nulla quo voluptas culpa reprehenderit adipisci recusandae nostrum aperiam sunt, dolore voluptatibus vel! Error aut fugit cupiditate enim!",
    key_techs: [
      "React",    
      "React Icons",
      "React Router Dom",
      "Bootstrap",
    ],
  },
  
  {
    id: 5,
    name: "Issue Tracker",
    image_path: "/images/issue-tracker.PNG",
    deployed_url: "https://amjadhossain1.github.io/issue-tracker",
    github_url: "https://github.com/amjadhossain1/issue-tracker",
    category: ["javascript"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat similique corporis hic. Nulla quo voluptas culpa reprehenderit adipisci recusandae nostrum aperiam sunt, dolore voluptatibus vel! Error aut fugit cupiditate enim!",
    key_techs: [
      "Javascript",    
    ],
  },

  {
    id: 6,
    name: "Red onion foods",
    image_path: "/images/red-onion.PNG",
    deployed_url: "https://red-onion-foods.netlify.app",
    github_url: "https://github.com/amjadhossain1/red-onion-foods",
    category: ["react"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat similique corporis hic. Nulla quo voluptas culpa reprehenderit adipisci recusandae nostrum aperiam sunt, dolore voluptatibus vel! Error aut fugit cupiditate enim!",
    key_techs: [
      "React JS",
      "Redux",
      "React Redux",
      "Redux Thunk",
      "React Hook Form",
      "React Multi Carousel",
      "Bootstrap",
      "React Icons",
    ],
  },
  {
    id: 7,
    name: "Modern Real estate app",
    image_path: "/images/real-estate.PNG",
    deployed_url: "https://modern-real-estate-app-one.vercel.app",
    github_url: "https://github.com/amjadhossain1/modern-real-estate-app",
    category: ["next"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat similique corporis hic. Nulla quo voluptas culpa reprehenderit adipisci recusandae nostrum aperiam sunt, dolore voluptatibus vel! Error aut fugit cupiditate enim!",
    key_techs: [
      "Next JS",
      "Chakra UI",
      "React Icons",
      "Framer Motion",
      "NProgress",
      "Millify",
      "React horizontal scrolling menu",
    ],
  },

  {
    id: 8,
    name: "Next News App",
    image_path: "/images/news-app.PNG",
    deployed_url: "https://next-news-amjadrabby.vercel.app/",
    github_url: "https://github.com/amjadhossain1/next-news",
    category: ["next"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat similique corporis hic. Nulla quo voluptas culpa reprehenderit adipisci recusandae nostrum aperiam sunt, dolore voluptatibus vel! Error aut fugit cupiditate enim!",
    key_techs: ["Next js", "API"],
  },
];
