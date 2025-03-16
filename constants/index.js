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
      "Pursuing Computer Science at Bahir Dar University, with a strong focus on backend development, system design, and performance optimization.",
      "Developed and deployed scalable web applications, including an AI-powered learning platform, a membership system with payment integration, and a real-time chat application with encryption for secure communication.",
      "Built and optimized RESTful APIs using Node.js and Express, integrating advanced database management techniques with MySQL and MongoDB to ensure efficiency and scalability.",
      "Implemented security best practices, including data encryption and authentication mechanisms, to protect sensitive user information in web applications.",
      "Worked as a backend developer at Askuala, contributing to the development of an educational system by enhancing performance, optimizing APIs, and improving security measures.",
      "Designed and maintained Redis-based caching strategies to improve database performance and system responsiveness.",
      "Led and mentored teams in software development projects, contributing to problem-solving sessions and guiding junior developers in building scalable applications.",
      "Explored DevOps practices, focusing on CI/CD pipelines, server deployment, and infrastructure automation to enhance application deployment workflows."
    ]    
  },
  {
    title: "Backend Developer",
    company_name: "Askuala Link",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Present",
    points: [
      "Developed and optimized backend services for an educational platform, enhancing system performance and scalability.",
      "Implemented secure authentication and authorization mechanisms, including JWT and OAuth, to protect user data.",
      "Integrated payment systems and automated membership management using Chapa, ensuring seamless transactions.",
      "Utilized Redis for caching to improve response times and database efficiency in high-traffic scenarios.",
      "Designed and maintained RESTful APIs with Express.js and Node.js, ensuring robust and scalable architecture.",
      "Enhanced system security by encrypting and decrypting sensitive user data using CryptoJS."
    ]    
  },
  {
    title: "React/Node.js Developer",
    company_name: "",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "March 2023 - Present",
    points: [
      "Engineered highly interactive and reusable React.js components, optimizing performance and maintainability across projects.",
      "Designed and implemented scalable RESTful APIs using Node.js and Express, ensuring seamless communication between frontend and backend systems.",
      "Integrated authentication and authorization systems using JWT and OAuth, enhancing security in user management workflows.",
      "Developed real-time applications with WebSockets and Socket.IO, enabling interactive features like live chat and notifications.",
      "Leveraged Tailwind CSS and modern UI/UX principles to build responsive and visually appealing interfaces across multiple devices.",
      "Optimized database queries and data fetching strategies for MySQL and MongoDB, improving backend efficiency and system scalability."
    ]
  },
  {
    title: "MERN Stack Developer",
    company_name: "",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "January 2023 - Present",
    points: [
      "Developed and deployed full-stack applications using MongoDB, Express, React, and Node.js, ensuring high performance and scalability.",
      "Optimized database performance by designing efficient MongoDB schemas, indexing queries, and implementing caching with Redis.",
      "Implemented secure authentication and authorization systems using JWT, OAuth, and role-based access control (RBAC).",
      "Designed and integrated real-time features using WebSockets and Socket.IO, enhancing user interaction and engagement.",
      "Deployed applications on cloud platforms such as AWS, Vercel, Firebase, and Render, automating deployment with CI/CD pipelines.",
      "Enhanced API performance and scalability by implementing rate limiting, pagination, and efficient query handling.",
      "Integrated third-party APIs, including payment gateways like Chapa, to support seamless transactions and e-commerce functionality."
    ]
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
      "Built a solid foundation in data structures, algorithms, and object-oriented programming, applying them to solve complex problems.",
      "Contributed to real-world projects, demonstrating the ability to apply academic knowledge in practical scenarios.",
      "Developed strong analytical and problem-solving skills through coursework, project development, and coding challenges.",
      "Explored and applied advanced concepts in cloud computing, database design, software engineering principles, and modern programming paradigms.",
      "Engaged in collaborative team projects, enhancing communication and teamwork skills while delivering successful results.",
      "Deepened understanding of system design and performance optimization through hands-on development and research."
    ]    
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
    name: "Askuala Link",
    description:
      "Askuala Link is a dynamic platform that provides comprehensive school management solutions tailored to meet the needs of schools of all sizes. This platform is designed to enhance the efficiency and effectiveness of school administration while fostering seamless communication between educators, students, and parents.",
      tags: [
        {
          name: "Backend Development",
          color: "blue-text-gradient",
        },
        {
          name: "API Design",
          color: "orange-text-gradient",
        },
        {
          name: "Real-Time Communication",
          color: "green-text-gradient",
        },
        {
          name: "Payment Integration",
          color: "purple-text-gradient",
        },
        {
          name: "Database Optimization",
          color: "yellow-text-gradient",
        },
        {
          name: "Security Enhancements",
          color: "pink-text-gradient",
        },
      ],
    image: "/assets/projects/askuala.jpg",
    source_code_link: "https://askualalink.com",
    deployed_link: "https://askualalink.com",
  },
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
