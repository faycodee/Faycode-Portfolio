import {
  frontend,
  backend,
  ux,
  datamanagement,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  agile,
  bootstrap,
  framerm,
  githubi,
  gsap,
  mysql,
  php,
  python,
  reactjs,
  redux,
  tailwind,
  three,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  employee,
  fayshop,
  getmat,
  parallax,
  porthtml,
  timepro,
  datacer,
  gitcer,
  jscer,
  pythoncer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "service",
  //   title: "Service",
  // },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "Education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Management",
    icon: datamanagement,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Bootstrap ",
    icon: bootstrap,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "GSAP",
    icon: gsap,
  },
  {
    name: "Three Fiber",
    icon: three,
  },
  {
    name: "My SQL",
    icon: mysql,
  },

  {
    name: "Agile",
    icon: agile,
  },

  {
    name: "Python",
    icon: python,
  },
  {
    name: "Framer",
    icon: framerm,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },

  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },

  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Cover Hunt",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Aug 2021 - Feb 2022",
  },
  {
    title: "Mentor (Volunteer)",
    company_name: "Microverse",
    icon: microverse,
    iconBg: "#333333",
    date: "Mar 2022 - May 2022",
  },
  {
    title: "Junior Software Engineer",
    company_name: "Kelhel",
    icon: kelhel,
    iconBg: "#333333",
    date: "May 2022 - Oct 2022",
  },
  {
    title: "Full Stack Developer",
    company_name: "Diversity Cyber Council",
    icon: dcc,
    iconBg: "#333333",
    date: "Sep 2022 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "TimePro",
    vidpro: "",
    description: " TimePro a solve the problem of organizing time and tasks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "purple-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: timepro,
    repo: "https://github.com/faycodee/TimePro-todoList-Redux",
    demo: "https://timepro.netlify.app/",
  },
  {
    id: "project-2",
    name: "employee",
    vidpro: "",
    description:
      "In the application utilizes Axios to make API requests for retrieving and manipulating employee data. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "purple-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framermotion",
        color: "green-text-gradient",
      },
    ],
    image: employee,
    repo: "https://github.com/faycodee/Employee-crude-api-axios",
    demo: "https://employee-sage.vercel.app/",
  },
  {
    id: "project-3",
    name: "fayshop",
    vidpro: "",
    description:
      "Hi, I built this Ecommerc T-shirts project using only JavaScript in order to develop my skills in this great language.",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: fayshop,
    repo: "https://github.com/faycodee/Ecommerce-T-shirts-website-Fayshop-JS",
    demo: "https://ecommerc-fayshop.netlify.app/",
  },
  // {
  //   id: "project-0",
  //   name: "Parallax",
  //   description:
  //     "After watching a video on YouTube explaining the parallax effect, I liked it a lot and this was the attempt.",
  //   tags: [
  //     {
  //       name: "javascript",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: parallax,
  //   repo: "https://github.com/faycodee/parallax-Effect-JS",
  //   demo: "https://faycodee.github.io/parallax-Effect-JS/",
  // },
  {
    id: "project-4",
    name: "Faycss Portfolio",
    vidpro: "./porthtml.mp4",
    description:
      "This is MY first site I created after learning CSS and HTML .",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: porthtml,
    repo: "https://github.com/faycodee/Portfolio-Faycss",
    demo: "https://faycodee.github.io/Portfolio-Faycss/",
  },
  {
    id: "project-6",
    name: "GetMat ",
    vidpro: "",
    description: "this website is an online learning using CRUD JS ",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: getmat,
    repo: "https://github.com/faycodee/CRUD-cssAnimation-slider-getMatierr",
    demo: "https://faycodee.github.io/CRUD-cssAnimation-slider-getMatierr/",
  },
];
const certifications = [
  {
    id: 1,
    name: "Intro to Data and Data Science",
    image: datacer,
    company: "learn.365datascience.com",
    disc: "Certified in Data Science basics: Data analysis, visualization, and foundational techniques.",

    link: "https://learn.365datascience.com/c/1f5681348f/",
  },
  {
    id: 2,
    name: "Git and GitHub",
    image: gitcer,
    company: "learn.365datascience.com",
    disc: "Proficient in Git and GitHub: Version control and collaboration.",

    link: "https://learn.365datascience.com/certificates/CC-848F5C8F60/",
  },
  {
    id: 3,
    name: "Python Essentials",
    image: pythoncer,
    company: "credly.com",
    disc: "Certified in Python Essentials: Core programming and problem-solving skills.",
    link: "https://www.credly.com/badges/6438ea77-9d04-4747-8f40-3ff32d9f9b59/linked_in?t=smdukb",
  },
  {
    id: 4,
    name: "Programming with JavaScript",
    image: jscer,
    company: "coursera.org",
    disc: "Skilled in JavaScript: Programming fundamentals and web development.",

    link: "https://www.coursera.org/account/accomplishments/verify/RPKT4P8MLE8M?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
];

export { services, technologies, experiences, projects, certifications };
