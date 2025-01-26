import project1 from "../assets/projects/real.jpeg";
import project2 from "../assets/projects/food.jpeg";
import eproject1 from "../assets/projects/e1.webp";
import eproject2 from "../assets/projects/e2.jpeg";
import i1 from "../assets/archievements/i1.jpeg";
import i3 from "../assets/projects/e3.webp";
import i4 from "../assets/archievements/i4.jpeg";

export const HERO_CONTENT = `
I am a third-year Electrical and Information Engineering undergraduate with a passion for both software and electronics. My experience as a software engineering intern has honed my skills in development and problem-solving. I am driven to contribute to projects that connect software and hardware, especially in automation, IoT, and embedded systems.`;

export const ABOUT_TEXT = `
I am Wimukthi Pathum Wijerathne, a dedicated and versatile full-stack developer and a third-year undergraduate at the University of Ruhuna’s Faculty of Engineering, Department of Electrical and Information Engineering. With expertise in React, NestJS, Spring Boot, Node.js, and MongoDB, I am passionate about building efficient and user-friendly web applications. I am also experienced in machine learning, using libraries like Pandas, NumPy, and PyTorch to develop data-driven solutions. On the electronics side, I have proficiency in KiCad and Altium for designing and simulating circuits. My journey started with a curiosity for understanding how things work, and it has evolved into a commitment to learning and tackling complex challenges. I thrive in collaborative environments and enjoy solving problems to deliver high-quality results. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.`;
export const EDUCATION = [{
  year: "2016 ",
    role: "GCE Odinary Level",
    company: "Walisinghe harischandra Collage",
    description: `Passed GCE O/L with 6A passes and 3B passes`,
    
},
{
  year: "2020 ",
    role: "GCE Advanced Level(Physical Science Stream)",
    company: "Walisinghe harischandra Collage",
    description: `Passed GCE A/L with 2A passes and 1B passes.District Rank:27 and Island Rank:1368,Z-Score:1.8804`,
    technologies: ["Mathematics:A", "Physics:B", "Chemistry:A"],
},
{year: "2021-present ",
  role: "Electrical and Information Engineering Undergraduate",
  company: "Department of Electrical and Information Engineering, Faculty of Engineering, University of Ruhuna",
  description: `Currently pursuing a degree in Electrical and Information Engineering, focusing on software development, electronics.`,
  
}
]
export const EXPERIENCES = [
  
  {

    year: "2023 ",
    role: "Intern Software Engineer",
    company: "NCINGA Pvt. Ltd.",
    description: `Contributed to the development and maintenance of e-commerce platforms using React.js and Spring Boot. Assisted in implementing RESTful APIs and integrating with databases. Collaborated with the team and stakeholders to understand project requirements and ensure timely delivery.`,
    technologies: ["Javascript", "React.js", "SpringBoot", "mongoDB"],
  }
];

export const PROJECTS = [
  {
    title: "Real Estate Web App",
    image: project1,
    description:
      "A dynamic real estate web application integrated with interactive maps, enabling users to buy and sell properties efficiently. Built using the MERN stack, it includes features like property listings, user authentication, and real-time map integration for a seamless experience.",
    technologies: ["TailwindCSS", "Nextjs", "Node.js", "MongoDB"],
  },

  {
    title: "Food Ordering App",
    image: project2,
    description:
      "This Project is for Online food ordering",
    technologies: [ "React", "Node.js", "MongoDB"],
  },
  
];
export const EPROJECTS=[
  {
    title: "Transmission Line Fault Detection System",
    image: i3,
    description:
      "We implemeted a transmission line fault detection system.for the microprocessor we use a ESP32 and as sensors we usedACS712,ZMPT101B and KY-001 sensors.we implemented the dashbooard using HTML and CSS.We got the real rime data and shown it in the dashboard using a web serever.If there is any fault it will shown in the dashboard.",
    technologies: [ "C++", "HTML", "CSS"],
  },

  {
    title: "Pulse With Modulator with variable Duty time and frequency",
    image: eproject1,
    description:
      "This Project is implementing a single layer pcb.we designed pcb using Altium",
    technologies: [ "Altium"],
  },
  {
    title: "Filter with 12kHz cutoff Frequency",
    image: eproject2,
    description:
      "This Project is implementing a single layer pcb.we designed pcb using Altium",
    technologies: [ "Altium"],
  },
  

]
export const CONTACT = {
  address: "Anuaradhapura, Sri Lanka",
  phoneNo: "0713834401",
  email: "wimukthiwijerathne@gmail.com",
};
export const ARCHIEVMENTS =[
  {
    title: "Dextrone Robotic competiton",
    place: "Finalist",
    description:"Fast line following Robotic competition which is organized by ITUM.We built our robo using ESP32 microcontroller,CRV8833 motor controller and as the IR array we used QTR-8RC sensor.",
    image: i4

  }
]
