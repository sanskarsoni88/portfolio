/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sanskar Soni",
  description:
    "An engineer driven to design intelligent, multidisciplinary systems—merging AI, robotics, and embedded design into products that shape the future of technology.",
  og: {
    title: "Sanskar Soni's Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/", //change later
  },
};

//Home Page
const greeting = {
  title: "Sanskar Soni",
  logo_name: "SanskarSoni",
  nickname: "BASc in Integrated Engineering from UBC",
  subTitle:
    "An engineer driven to design intelligent, multidisciplinary systems—merging AI, robotics, and embedded design into products that shape the future of technology.",
  resumeLink:
    "https://drive.google.com/file/d/1GeuDxQVDTRGHs0DAE2MzrdCADYkwWvE5/view?usp=sharing",
  portfolio_repository:
    "https://drive.google.com/file/d/1GeuDxQVDTRGHs0DAE2MzrdCADYkwWvE5/view?usp=sharing",
  githubProfile: "https://github.com/sanskarsoni88",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/sanskarsoni88",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sanskar-soni-0125171a9/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:sanskar.soni88@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Embedded Programming & Systems Design",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing firmware in C/C++ for microcontrollers (STM32, Teensy, ESP32)",
        "⚡ Hardware-software integration for complex systems, real-time control loops",
        "⚡ Debugging embedded systems with logic analyzers, oscilloscopes and multimeters",
        "⚡ Communication protocols: CAN, UART, SPI, I²C",
      ],
      softwareSkills: [
        {
          skillName: "C/C++",
          fontAwesomeClassname: "streamline-freehand:file-code-c-plus-plus",
        },
        {
          skillName: "Microcontrollers",
          fontAwesomeClassname: "arcticons:zflasher-stm32",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Control Systems",
          fontAwesomeClassname: "arcticons:pid-litacka",
        },
        {
          skillName: "Debugging with devices like oscilloscopes",
          fontAwesomeClassname: "arcticons:oscilloscope",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Robotics & Simulations",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Developing robotics controls software including robot kinematics, motion planning & control systems ",
        "⚡ Modelling robots using URDF and simulating in Isaac Sim, Gazebo and Matlab",
        "⚡ Training robots with Reinforcement Learning in Isaac Lab",
        "⚡ Experience with Middleware such as ROS, ZMQ, and with distributed systems for multi-robot setups",
      ],
      softwareSkills: [
        {
          skillName: "ROS",
          fontAwesomeClassname: "logos:ros",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Gazebo",
          fontAwesomeClassname: "devicon:gazebo-wordmark",
          style: {
            backgroundColor: "white",
          },
        },
        {
          skillName: "Robot Controls",
          fontAwesomeClassname: "mdi:robot-industrial",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Computer Networking",
          fontAwesomeClassname: "ph:network-light",
        },
        {
          skillName: "Isaac Sim/Lab",
          fontAwesomeClassname: "logos:nvidia",
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience developing deep learning models for applications in NLP and Computer vision",
        "⚡ Complex statistical modelling for data analysis",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "material-icon-theme:pytorch",
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "devicon:keras",
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "logos:hugging-face",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
        },
        {
          skillName: "Deep Learning",
          fontAwesomeClassname: "eos-icons:neural-network",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Other Software Skills",
      fileName: "DesignImg", //"CloudInfraImg",
      skills: [
        "⚡ Developing in Linux environments along with Bash scripting",
        "⚡ Docker for containerization and reproducible environments",
        "⚡ Git/GitHub workflows, CI/CD familiarity (GitHub Actions)",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "material-icon-theme:docker",
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "flat-color-icons:linux",
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "simple-icons:gnubash",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "mdi:github",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "devicon:postgresql-wordmark",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "University of British Columbia",
      subtitle: "BASc in Integrated Engineering",
      logo_path: "ubc-logo.png",
      alt_name: "UBC Vancouver",
      duration: "2020 - 2025",
      descriptions: [
        "⚡ Specialized in Computer and Electrical Engineering.",
        "⚡ Developed skills via projects in embedded programming, robotics, systems engineering, simulations, AI and controls.",
        "⚡ Relevant courses: Introduction to Robotics, Data Structures and Algorithms, Control Systems, Digital Logic and Microcontrollers.",
      ],
      website_link: "https://www.ubc.ca/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Co-op and Internships",
  description:
    "I have 16 month of co-op experience with multiple startups, working for a robotics company as a controls software engineer and as an AI engineer for a B2B company.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Coops",
      work: true,
      experiences: [
        {
          title: "Robotics Software Engineer",
          company: "Sarcomere Dynamics Inc.",
          company_url: "https://sarcomeredynamics.com/home",
          logo_path: "sarcomere_logo.png",
          duration: "May 2024 - December 2024",
          location: "Vancouver, B.C.",
          points: [
            "Developed C & C++ firmware on Teensy microcontrollers to interface with motors and get real-time feedback for a robotic arm system.",
            "Trained and fine-tuned a reinforcement learning policy for a dual-arm 6-DOF robot in IsaacLab, enabling stable and realistic behavior.",
            "Utilized multithreading to synchronize feedback from RealSense camera, Manus gloves and orientatoin sensors for real-time control.",
            "Programmed curobo's inverse kinematics solver to control a 6 DOF robotic arm, increasing reachability by 15%.",
            "Automated CAN bus interface setup on Jetson using Bash scripts, optimizing startup routines for consistent initialization across reboots.",
            "Configured a low-latency UDP network across distributed devices for real-time remote robot control and feedback within 300 m.",
            "Designed architecture for teleoperation controls using multiprocessing and collected data in real-time to facilitate imitation learning training.",
          ],
          softwareSkills: [
            {
              skillName: "Python",
              fontAwesomeClassname: "ion-logo-python",
              style: { color: "#3776AB" },
            },
            {
              skillName: "C/C++",
              fontAwesomeClassname: "streamline-freehand:file-code-c-plus-plus",
            },
            {
              skillName: "Debugging with devices like oscilloscopes",
              fontAwesomeClassname: "arcticons:oscilloscope",
              style: {
                backgroundColor: "transparent",
              },
            },
            {
              skillName: "Robot Controls",
              fontAwesomeClassname: "mdi:robot-industrial",
              style: {
                backgroundColor: "transparent",
              },
            },
            {
              skillName: "Computer Networking",
              fontAwesomeClassname: "ph:network-light",
            },
            {
              skillName: "Isaac Sim/Lab, Jetson",
              fontAwesomeClassname: "logos:nvidia",
            },
            {
              skillName: "Docker",
              fontAwesomeClassname: "material-icon-theme:docker",
            },
          ],
          color: "#000000",
        },
        {
          title: "AI Engineer",
          company: "Vistaar",
          company_url: "https://vistaartrade.com/",
          logo_path: "vistaar_logo_green.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          points: [
            "Trained an AI pipeline that classifies B2B products into 6000+ categories using hierarchical neural networks, saving NPR 240,000 annually.",
            "Utilized a pre-trained fasttext model to generate word embeddings, resulting in an achieved f1-score of 0.62.",
            "Built a modular Python framework to customize classification outputs to client-specific taxonomies for scalable SaaS deployment.",
            "Maintained an SQL database of 700,000+ product listings, ensuring clean input for training, inference, and real-time client deployments.",
          ],
          color: "#0879bf",
          softwareSkills: [
            {
              skillName: "Python",
              fontAwesomeClassname: "ion-logo-python",
              style: { color: "#3776AB" },
            },
            {
              skillName: "Docker",
              fontAwesomeClassname: "material-icon-theme:docker",
            },
            {
              skillName: "NLP & Deep Learning",
              fontAwesomeClassname: "eos-icons:neural-network",
              style: {
                color: "#61DAFB",
              },
            },
          ],
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is in creating robotics and AI products.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_pic.png",
    description:
      "I am available on almost every social media, best reachable via email. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Vancouver, BC. CA",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

// Project detail pages (for /project/:id)
const detailedProjects = [
  {
    id: "Minesweeper", // URL slug -> /project/beezy
    title: "Minesweeper – Autonomous Demining Rover",
    period: "Sep 2023 – Apr 2024",
    summary: "Autonomous rover for landmine detection and flagging.",
    skills: [
      "Python",
      "ROS2",
      "C/C++",
      "Gazebo",
      "Raspberry Pi",
      "ESP32",
      "I2C",
      "Computer Vision",
      "Systems Engineering",
    ],
    description:
      "The MineSweeper rover helps humanitarian demining organizations automatically detect and map landmines in war torn lands, reducing the need for human labour. I was responsible for sensor fusion, computer vision, navigation, simulations and the software controls.",
    display: "carousel", // 'carousel' | 'stack'
    media: [
      {
        type: "video",
        src: "minesweeper_demo_video_sped.mp4",
        caption: "Render of the rover's physical design.",
      },
      {
        type: "image",
        src: "minesweeper_systems_overview.jpg",
        caption: "High level robot systems engineering.",
      },
      {
        type: "image",
        src: "Minesweeper_software_design.jpg",
        caption: "High level software systems overview.",
      },
      {
        type: "image",
        src: "minesweeper_cv_algorithm.png",
        caption: "Landmine computer vision process",
      },
      {
        type: "image",
        src: "minesweeper_inference.png",
        caption: "Object Detection in action",
      },
      {
        type: "image",
        src: "minesweeper_urdf.png",
        caption: "URDF of robot developed for simulations",
      },
    ],
    softwareSkills: [
      // 👈 for card icons
      {
        skillName: "Python",
        fontAwesomeClassname: "ion-logo-python",
        style: { color: "#3776AB" },
      },
      { skillName: "ROS2", fontAwesomeClassname: "logos:ros" },
      { skillName: "Gazebo", fontAwesomeClassname: "devicon:gazebo-wordmark" },
      {
        skillName: "C/C++",
        fontAwesomeClassname: "streamline-freehand:file-code-c-plus-plus",
      },
      { skillName: "Linux", fontAwesomeClassname: "flat-color-icons:linux" },
      {
        skillName: "YOLO object detection",
        fontAwesomeClassname: "tabler:camera-ai",
      },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/sanskarsoni88/beezy" },
      // { label: "Exclusive Feature", url: "https://example.com/beezy-feature" }
    ],
  },

  {
    id: "beezy", // URL slug -> /project/beezy
    title: "Beezy – Smart Beehive",
    period: "Sep 2022 – Apr 2023",
    summary: "A comprehensive smart beehive that promotes hive health.",
    skills: [
      "Python",
      "ROS2",
      "Raspberry Pi",
      "C/C++",
      "ESP32",
      "UART",
      "Object Detection",
      "Flask Server",
    ],
    description:
      "Beezy smart beehives are fit with feeders and various sensors to provide relevant telemetric data to beekeepers. They also autonomously test for varroa mite infestations - the biggest threat to a hive's population.",
    display: "carousel", // 'carousel' | 'stack'
    media: [
      {
        type: "image",
        src: "beezy_design_large.png",
        caption: "Physical design of beezy smart beehives.",
      },
      {
        type: "image",
        src: "Beezy_systems_architecture.jpg",
        caption: "High level architecture of beezy smart beehives.",
      },
      {
        type: "image",
        src: "Beezy_AI_pipeline.jpg",
        caption: "Computer vision pipeline used for detecting varroa mites",
      },
      {
        type: "image",
        src: "beezy_inference.png",
        caption: "YOLO Object Detection in action.",
      },
    ],
    softwareSkills: [
      // 👈 for card icons
      {
        skillName: "Python",
        fontAwesomeClassname: "ion-logo-python",
        style: { color: "#3776AB" },
      },
      {
        skillName: "YOLO object detection",
        fontAwesomeClassname: "tabler:camera-ai",
      },
      { skillName: "Flask Server", fontAwesomeClassname: "logos:flask" },
      {
        skillName: "C/C++",
        fontAwesomeClassname: "streamline-freehand:file-code-c-plus-plus",
      },
    ],
    links: [
      {
        label: "Read the exclusive feature by UBC Engineering",
        url:
          "https://engineering.ubc.ca/spotlight/student-project/beezy-remotely-monitoring-beehives-to-detect-and-prevent-infestations",
      },
      { label: "GitHub", url: "https://github.com/sanskarsoni88/beezy" },
    ],
  },

  {
    id: "Cobot Muscle", // URL slug -> /project/beezy
    title: "Cobot Muscle – 4DOF collaborative robot",
    period: "Jan 2022 – Apr 2022",
    summary: "A collaborative robot for remote control.",
    skills: ["C++", "Matlab", "ESP32", "Systems Integration", "Simulation"],
    description:
      "I designed the mapping for a 4DOF collaborative robot arm. I also simulated its inverse kinematics in Matlab.",
    display: "carousel", // 'carousel' | 'stack'
    media: [
      {
        type: "image",
        src: "cobot_slave_arm_real.png",
        caption: "Physical build of the acting robot arm.",
      },
      {
        type: "video",
        src: "cobot_demo_video.mp4",
        caption: "Demo: Acting arm being controlled by controller arm.",
      },
      {
        type: "video",
        src: "4DOF_robot_IK_cylinders.mp4",
        caption: "Matlab simulation of the inverse kinematics of the arm.",
      },
    ],
    softwareSkills: [
      // 👈 for card icons
      {
        skillName: "Python",
        fontAwesomeClassname: "ion-logo-python",
        style: { color: "#3776AB" },
      },
      { skillName: "Matlab", fontAwesomeClassname: "devicon:matlab" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/sanskarsoni88/beezy" },
      // { label: "Exclusive Feature", url: "https://example.com/beezy-feature" }
    ],
  },

  // add more projects here...
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  detailedProjects,
};
