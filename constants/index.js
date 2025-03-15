import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  }
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    }
  ],
  frameworks: [
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    }
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    }
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
};

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Pursuing Computer Science at Bahir Dar University, emphasizing hands-on development and innovation.",
      "Designed and deployed dynamic web applications, including a feature-rich E-commerce platform with payment integration and admin controls, a Hospital Management System for operational efficiency, and a Netflix clone leveraging TMDB API for interactive content streaming. Collaborated on video conferencing applications and real-time facility management systems, emphasizing scalable architecture and user-friendly interfaces..",
      "Skilled in creating scalable backend systems with RESTful APIs and advanced database management.",
      "Demonstrated strong collaboration skills by working in agile teams and solving complex challenges.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Askuala Link",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Present",
    points: [
      "Streamlined server-side logic for secure, high-performance web applications.",
      "Mastered backend frameworks such as Node.js, Express, Socket.IO, implementing scalable architectures and real-time communication systems to build robust and efficient web applications.",
      "Integrated third-party APIs, including payment gateways and real-time data services.",
      "Optimized database queries and schema designs using MySQL, Mongodb and Firestore on Firebase.",
    ],
  },
  {
    title: "React/Node.js Developer",
    company_name: "",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Developed dynamic and reusable React.js components, ensuring maintainable and scalable front-end codebases.",
      "Designed and implemented scalable REST APIs using Node.js, seamlessly integrating backend services with the React frontend.",
      "Created visually appealing and responsive UIs using advanced Tailwind CSS utilities, ensuring cross-device compatibility and pixel-perfect designs.",
      "Troubleshot and resolved complex issues across full-stack applications, improving performance and reliability in production environments.",
    ]
    
  },
  {
    title: "MERN Stack Developer",
    company_name: "",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "January 2023 - Present",
    points: [
      "Built full-stack applications with MongoDB, Express, React, and Node.js, leveraging their seamless compatibility.",
      "Enhanced application performance by refactoring codebases and optimizing MongoDB queries.",
      "Designed CI/CD pipelines and deployed applications on platforms like render, Vercel, firebase and b4a.",
      "Integrated advanced features like real-time notifications, role-based authentication, and analytics dashboards.",
    ],
  },
  {
    title: "Problem-Solving Mentor",
    company_name: "",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Conducted workshops and mentorship sessions on JavaScript, React, and backend development.",
      "Helped peers troubleshoot issues in coding projects, emphasizing problem-solving techniques.",
      "Explained complex concepts in simple terms, fostering a collaborative and learning-focused environment.",
      "Encouraged knowledge sharing and team discussions to promote innovation and creativity.",
    ],
  },
  {
    title: "Computer Science Student",
    company_name: "Bahir Dar University",
    icon: "/assets/company/university-icon.png",
    iconBg: "#E6DEDD",
    date: "September 2022 - Present",
    points: [
      "Gained a solid foundation in data structures, algorithms, and object-oriented programming.",
      "Participated in projects, applying academic knowledge to solve real-world problems.",
      "Developed strong analytical and critical thinking skills through rigorous coursework and practical projects.",
      "Explored advanced topics like cloud computing, Database Designs, Programming, and Software engineering principles.",
    ],
  },
];


// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "YON-NAZ SHOP",
    description:
      "YON-NAZ SHOP is an e-commerce platform offering a seamless shopping experience, from managing orders to purchasing products. Built with React, Node.js, Mongodb, and Tailwind CSS, it features dynamic product listings, secure login, real-time cart management, and integrated checkout with payment processing, including support for Ethiopian Birr (ETB). Admins have full control over product inventory, order history, and promotions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "orange-text-gradient",
        },
        {
          name: "redux toolkit",
          color: "yellow-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      
    image: "/assets/projects/YON-NAZ-Shop.jpg",
    source_code_link: "https://github.com/yonas790/frontend-ecommerce",
    deployed_link: "https://yon-naz-shop.netlify.app/",
  },
  
  {
    name: "Netflix Clone",
    description:
      "Netflix Clone is a movie streaming application inspired by Netflix, built using React, Firebase, TMDB API, and CSS. This project allows users to browse trending and top-rated movies, watch trailers, and add movies to their watchlist.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tmdb-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/Netflex.jpg",
    source_code_link: "https://github.com/yonas790/Netflix-Amazon-API-Integration",
    deployed_link: "https://yonas-netfx-movie-cloned.netlify.app/",
  },
  {
    name: "EveryChat",
    description:
      "EveryChat is a full-stack real-time chat application built with React, Tailwind CSS, Node.js, MongoDB, and Socket.io. The app offers instant messaging, user authentication, and message persistence. A standout feature is the ability for logged-in users to view and chat with all registered users seamlessly. making it perfect for social networking and team collaboration",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "socket.io",
        color: "purple-text-gradient",
      },
    ],
    image: "/assets/projects/chat-app.png",
    source_code_link: "https://github.com/yonas790/chat-app.git",
    deployed_link: "https://yonz-everychat.onrender.com",
  },

  
  {
    name: "Full stack clone of Amazon",
    description:
      "Amazon Clone is an e-commerce web application modeled after Amazon, built using React, Firebase, Stripe API, and CSS. This project features user authentication, a dynamic shopping cart, order processing, and a secure payment system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "stripe-api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/Amazon.jpg",
    source_code_link: "https://github.com/yonas790/amazon-full-stack-clone",
    deployed_link: "http://yonas-amazon-cloned.netlify.app",
  },
  {
    name: "Full stack clone of Zoom",
    description:
      "Zoom Clone is a video conferencing application inspired by Zoom, built using React, Node.js, Socket.IO, and WebRTC. This project enables real-time video and audio communication, chat functionality, and room-based meetings for seamless collaboration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "orange-text-gradient",
      },
      {
        name: "webrtc",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/Zoom.jpg",
    source_code_link: "https://github.com/yonas790/Zoom-clone",
    deployed_link: "https://zoomclone-la80v5nc.b4a.run/",
  }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/yonas790",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/yonas-tesera",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/Yoniyyoo",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/nazrawiyy",
  },
];

const heroTexts = [
  "React/Node.js developer",
  500,
  "Freelancer",
  500,
  "Software developer",
  500,
  "Backend Specialized",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  // testimonials,
  projects,
  socials,
  heroTexts,
};
