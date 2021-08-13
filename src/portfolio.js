/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Rojan Dhimal",
  title: "Hi all, I'm Rojan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications and machine learning with JavaScript / Reactjs / Nodejs / Python and  some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qqWlosJPgxxIkTLHKgnNZhDzAAywXvTV/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rojandhimal",
  linkedin: "https://www.linkedin.com/in/rojandhimal/",
  gmail: "rojandhimal1@gmail.com",
  // gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/rojan.tegre.5",
  medium: "https://medium.com/@rojandhimal",
  stackoverflow: "https://stackoverflow.com/users/10996622/rojan-dhimal",
  instagram: 'https://www.instagram.com/rojan_tegre/',
  twitter: 'https://twitter.com/rojan_tegre1',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web mobile and desktop applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Damak Multiple Campus",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "+2 Science",
      duration: "2014-2015",
      desc: "",
      descBullets: [
        ""
      ]
    },
    {
      schoolName: "Himalaya College of Engineering",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2016 - April 2020",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Leapfrog Technology Inc.",
      companylogo: require("./assets/images/leap.jpeg"),
      date: "November 2019- January 2020",
      desc:
        "Leapfrog technology Inc is one of the top rated Multinational company in Nepal. They do full stack software engineering. Working environment at leapfrog technology is best of best.",
      descBullets: [
       
        "Web development",
        "Game Development",
        "Web design",
        "Software ENgineering Practice",
        "Standard technology"
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Asterdio Inc.",
      companylogo: require("./assets/images/asterdio.png"),
      date: "February 2021- Now",
      desc:
        "Asterdio is a technology & design partner for the most demanding companies. With over 5 years of experience and 30+ specialists on board, Asterdio offer a complete range of custom software development solutions: web and mobile development, product design, DevOps services and quality assurance tied together with branding and identity desgin.",
      descBullets: [
       
        "Advertising, Marketing & Digital Media Management",
        "UX/UI Design & Web/Mobile Development",
        "E-Commerce & Inventory SolutionsWeb design",
        "IT Services & DevOps Solutions"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "rojandhimal", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Tulikaa",
      projectDesc: "Tulikaa is a big platform for artist and art lovers with Ecommerce functionality, feed chat feature recommendation and many more",
      footerLink: [
        {
          name: "Tulikaa website",
          url: "https://tulikaa.asterdio.xyz/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Restrob",
      projectDesc: "Restrob is a online platform for restaurant management where vendor can manage multiple restaurnt in the platform. End user can find best nearest restaurnt through the platform with best deals.",
      footerLink: [
        // {
        //   name: "Restrob",
        //   url: "https://tulikaa.asterdio.xyz/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "HWCRN",
      projectDesc: "The project is based on CNN architecture. It is an android application that can recognize devanagari/ Nepali handwritten character. The dataset were created manually using photoshop penbrush tool",
      footerLink: [
        {
          name: "OCR",
          url: "https://github.com/rojandhimal/NepaliHandWrittenAlphabetRecognizer"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Ecommerce Website",
      projectDesc: "Ecommerce website based on python Django",
      footerLink: [
        {
          name: "Ecommerce",
          url: "https://github.com/rojandhimal/Ecommerce"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "DataScientist Nanodegree",
      subtitle:
        "Gain real-world data science experience with projects designed by industry experts. Build your portfolio and advance your data science career.",
      image: require("./assets/images/udacity.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://graduation.udacity.com/confirm/HMH2A7DS"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://rojandhimal.medium.com/how-to-add-render-html-file-in-pyqt5-dialog-box-4fc259a8f5a",
      title: "How to add(render) HTML file in PyQT5 Dialog Box",
      description:
        "In this article, I will show you how I add or render HTML files in PyQt5 Dialog box python GUI First of all you will need the following installed Python 3 or higher PyQt5 PyQtWebEngine"
    },
    {
      url: "https://rojandhimal.medium.com/resize-images-for-using-google-colab-gup-ffe7fcd2df94",
      title: "Resize Images using google Colab GPU",
      description:
        "If you have large image datasets it very time-consuming for you to resize in CPU. In this article I will show you how I resize images using google colab free gpu."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+977) 9813216037",
  email_address: "rojandhimal1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "rojan_tegre1", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
