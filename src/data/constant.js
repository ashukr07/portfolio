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
    figma,} from "../assets"
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
]
const resumeLink = "https://drive.google.com/file/d/1igBDEAtXqC1fzuMwSHGR3UpIrJ6kEzm6/view?usp=sharing";

const socials = {
        linkedin: "https://linkedin.com/in/ashutoshroy03",

        github: "https://github.com/ashukr07",

        twitter: "https://twitter.com/ashutosh_kr03",

        instagram: "https://instagram.com/ashutosh_kr03",

        facebook: "https://www.facebook.com/profile.php?id=100073451861040",

        mail: "ashutoshroy3434@gmail.com"
    
}

const about = "I'm a final-year B.Tech student in Electrical and Electronics Engineering at NIT Trichy with experience in JavaScript, TypeScript, Python, C++, and frameworks like React, Node.js, and Next.js. I’m currently learning AI, ML, and cloud computing and serve as the Head of DevOps for Currents, NIT Trichy."

const experiences = [
    {
      title: "PBWMT Intern",
      company_name: "Citi",
      icon: citi, // Replace with the appropriate icon or leave it as a placeholder
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
      icon: currents, // Replace with the appropriate icon or leave it as a placeholder
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
      icon: ever, // Replace with the appropriate icon or leave it as a placeholder
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
      icon: pragyan, // Replace with the appropriate icon or leave it as a placeholder
      iconBg: "#E6DEDD",
      date: "October 2022 - Present",
      points: [
        "Worked as a Manager of the Workshop Committee for Pragyan'23, an International Techno-Managerial Festival of NIT Trichy.",
        "Conducted activities from various fronts, including contacting companies, convincing students to participate, and publicizing workshops conducted by the fest.",
      ],
    },
  ];

  import React from "react";

  // Importing all skill icons

  
  // Skills data with imported icons
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
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: git },
        { name: "GitHub", icon: github },
        { name: "Docker", icon: docker },
        { name: "VS Code", icon: vscode },
        { name: "Postman", icon: postman },
        { name: "Figma", icon: figma },
      ],
    },
  ];
  
  




export {navLinks,resumeLink,about,socials,experiences,skills}