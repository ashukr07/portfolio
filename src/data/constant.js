import {
  currents,
  citi,
  ever,
  pragyan,
  reactjs,
  typescript,
  redux,
  zustand,
  nextjs,
  html,
  css,
  tailwind,
  javascript,
  bootstrap,
  daisyui,
  shadcnui,
  threejs,
  python,
  numpy,
  pandas,
  matplotlib,
  tensorflow,
  opencv,
  jupyter,
  hadoop,
  hive,
  pyspark,
  nodejs,
  express,
  mysql,
  postgresql,
  mongodb,
  appwrite,
  prisma,
  flask,
  git,
  github,
  docker,
  vscode,
  postman,
  figma,
  socially,
  chatApp,
  selfDriving,
  eCommerce,
  stickyNotes,
  imdbReview,
  blogWeb,
  whacAMole,
  agePredictor,
  reactNative,
  cloudinary,
  clerk,
  redis,
  socketio,
  framerMotion,
  cpp,
  c,
} from "../assets";
const navLinks = [
  {
    id: "about",
    name: "About",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "contact",
    name: "Contact",
  },
];
const resumeLink =
  "https://drive.google.com/file/d/1igBDEAtXqC1fzuMwSHGR3UpIrJ6kEzm6/view?usp=sharing";

const socials = {
  linkedin: "https://linkedin.com/in/ashutoshroy03",

  github: "https://github.com/ashukr07",

  twitter: "https://twitter.com/ashutosh_kr03",

  instagram: "https://instagram.com/ashutosh_kr03",

  facebook: "https://www.facebook.com/profile.php?id=100073451861040",

  linktree: "https://linktr.ee/ashutoshkr03",

  mail: "ashutoshroy3434@gmail.com",
};

const about =
  "I'm a final-year B.Tech student in Electrical and Electronics Engineering at NIT Trichy with experience in JavaScript, TypeScript, Python, C++, and frameworks like React, Node.js, and Next.js. I’m currently learning AI, ML, and cloud computing and serve as the Head of DevOps for Currents, NIT Trichy.";

const experiences = [
  {
    title: "PBWMT Intern",
    company_name: "Citi",
    icon: citi, 
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Underwent an internship program at Citicorp under the Data and Analytics team in PBWMT.",
      "Developed a Table Insights Dashboard using Flask, Hive, and PySpark to retrieve and consolidate data from Hive tables.",
      "Streamlined data retrieval by 30% and improved operational efficiency with automated reporting and visualization features.",
    ],
  },
  {
    title: "Head of DevOps",
    company_name: "Currents (EEE Dept Symposium)",
    icon: currents, 
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Promoted from Web Developer (October 2023) to Head of DevOps (August 2024).",
      "Managed the website for a national-level technical symposium, enabling event registration and certificate verification.",
      "Led junior team induction, conducted interviews, resolved technical issues, implemented enhancements, and contributed to workshop execution and participant training.",
    ],
  },
  {
    title: "Autonomous System Engineer",
    company_name: "Ever (Electric Vehicle Club, NIT Trichy)",
    icon: ever, 
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Worked as an Autonomous System Engineer at Ever, the Electric Vehicle club of NIT Trichy.",
      "Developed an autonomous delivery car capable of carrying items and integrating a Deep Learning Model with the hardware.",
    ],
  },
  {
    title: "Manager, Workshops",
    company_name: "Pragyan (International Techno-Managerial Fest, NIT Trichy)",
    icon: pragyan, 
    iconBg: "#E6DEDD",
    date: "October 2022 - Present",
    points: [
      "Worked as a Manager of the Workshop Committee for Pragyan'23, an International Techno-Managerial Festival of NIT Trichy.",
      "Conducted activities from various fronts, including contacting companies, convincing students to participate, and publicizing workshops conducted by the fest.",
    ],
  },
];


const skills = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: reactjs },
      { name: "TypeScript", icon: typescript },
      { name: "Redux", icon: redux },
      { name: "Zustand", icon: zustand },
      { name: "Next.js", icon: nextjs },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "JavaScript", icon: javascript },
      { name: "Bootstrap", icon: bootstrap },
      { name: "Daisy UI", icon: daisyui },
      { name: "Shadcn UI", icon: shadcnui },
      { name: "Three.js", icon: threejs },
      { name: "React Native", icon: reactNative },
      { name: "Framer Motion", icon: framerMotion },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: nodejs },
      { name: "Express.js", icon: express },
      { name: "MySQL", icon: mysql },
      { name: "PostgreSQL", icon: postgresql },
      { name: "MongoDB", icon: mongodb },
      { name: "Appwrite", icon: appwrite },
      { name: "Prisma", icon: prisma },
      { name: "Flask", icon: flask },
      { name: "Redis", icon: redis },
      { name: "Socket.IO", icon: socketio },
    ],
  },
  {
    category: "AI/ML and Analytics",
    skills: [
      { name: "Python", icon: python },
      { name: "NumPy", icon: numpy },
      { name: "Pandas", icon: pandas },
      { name: "Matplotlib", icon: matplotlib },
      { name: "TensorFlow", icon: tensorflow },
      { name: "OpenCV", icon: opencv },
      { name: "Jupyter", icon: jupyter },
      { name: "Hadoop", icon: hadoop },
      { name: "Hive", icon: hive },
      { name: "PySpark", icon: pyspark },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
      { name: "Docker", icon: docker },
      { name: "VS Code", icon: vscode },
      { name: "Postman", icon: postman },
      { name: "Figma", icon: figma },
      { name: "Cloudinary", icon: cloudinary },
      { name: "Clerk", icon: clerk },
      { name: "C", icon: c },
      { name: "C++", icon: cpp },
      
    ],
  },
];

const projects = [
  {
    id: 1,
    title: "Chat Application",
    date: "October 2024",
    description:
      "A real-time chat app with user authentication, online status, and real-time communication using Socket.IO.",
    technologies: [
      "React",
      "Zustand",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Socket.IO",
      "MongoDB",
    ],
    links: {
      github: "https://github.com/ashukr07/chat-app",
      live: "https://chat-app-wy70.onrender.com/",
    },
    featured: true,
    image: chatApp,
  },
  {
    id: 2,
    title: "Self Driving Car",
    date: "December 2023",
    description:
      "Simulated autonomous driving using a CNN model trained on augmented driving data.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "NumPy",
      "Socket",
    ],
    links: {
      github: "https://github.com/ashukr07/Self-Driving-Car",
    },
    featured: true,
    image: selfDriving,
  },
  {
    id: 3,
    title: "Socially",
    date: "January 2025",
    description:
      "A social media platform where users can post, follow others, and log in using Clerk.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Clerk",
      "Neon DB",
      "Prisma ORM",
      "Shadcn UI",
    ],
    links: {
      github: "https://github.com/ashukr07/Socially",
      live: "https://socially-ashukr07s-projects.vercel.app/",
    },
    featured: true,
    image: socially,
  },
  {
    id: 4,
    title: "Ecommerce Application",
    date: "November 2024",
    description:
      "An ecommerce platform with JWT authentication, Stripe payments, and Cloudinary integration.",
    technologies: [
      "React",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Redis",
      "Stripe",
      "Cloudinary",
    ],
    links: {
      github: "https://github.com/ashukr07/ecommerce-web",
      live: "https://ecommerce-web-xhf1.onrender.com/"
    },
    featured: true,
    image: eCommerce,
  },
  {
    id: 5,
    title: "Sticky Notes",
    date: "December 2024",
    description:
      "A sticky notes app where users can create, move, and save notes on a canvas.",
    technologies: ["React", "Appwrite"],
    links: {
      github: "https://github.com/ashukr07/Sticky-Notes",
      live: "https://sticky-notes-inky.vercel.app/",
    },
    featured: true,
    image: stickyNotes
  },
  {
    id: 6,
    title: "IMDb Review Rating Predictor",
    date: "April 2023",
    description:
      "Used an RNN to predict movie ratings based on reviews.",
    technologies: ["Python", "Pandas", "NumPy", "Keras", "Google Colab"],
    links: {
      github: "https://github.com/ashukr07/IMDb-Review-Rating-Predictor",
      live: "https://colab.research.google.com/drive/1KSXlt7qUDIcppU83QeQQ4d74COGjQeo3?usp=sharing",
    },
    featured: false,
    image: imdbReview,
  },
  {
    id: 7,
    title: "Blog Website",
    date: "January 2024",
    description:
      "A blog platform where users can post, edit, delete, and view blogs.",
    technologies: [
      "HTML",
      "Bootstrap",
      "Node.js",
      "Express",
      "EJS",
      "PostgreSQL",
    ],
    links: {
      github: "https://github.com/ashukr07/Blog-Website",
    },
    featured: true,
    image: blogWeb,
  },
  {
    id: 8,
    title: "Whac-a-Mole",
    date: "November 2023",
    description:
      "A fun game where players hit moles and avoid pitcher plants.",
    technologies: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/ashukr07/Whac-A-Mole",
      live: "https://ashukr07.github.io/Whac-A-Mole/"
    },
    featured: false,
    image: whacAMole,
  },
  {
    id: 9,
    title: "Age Predictor Application",
    date: "December 2023",
    description:
      "Predicts a person's age based on their name and country using the Agify API.",
    technologies: ["Bootstrap", "EJS", "Node.js"],
    links: {
      github: "https://github.com/ashukr07/Age-Predictor",
    },
    featured: false,
    image: agePredictor,
  },
];

  

export { navLinks, resumeLink, about, socials, experiences, skills, projects };
