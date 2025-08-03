import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import tree from "../assets/tree_species_classification.png";
import turf from "../assets/turf_booking_app.png";
import student from "../assets/student_management_system.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
    {
    id: "certifications",
    title: "Certifications", 
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon via Credly",
    icon: backend, // you can use cloud or backend icon
    iconBg: "#232F3E",
    date: "Issued: July 2024",
    points: [
      "Fundamental knowledge of AWS services, architecture, and pricing.",
      "Credential issued via Credly's verified digital badge.",
    ],
    certificate_link: "https://www.credly.com/badges/6fb308da-8fa5-4b24-a72e-12bfc9602fda/linked_in_profile",
  },
  {
    title: "Google Cloud Essentials",
    organization: "Google Cloud Skills Boost",
    icon: web,
    iconBg: "#4285F4",
    date: "Issued: June 2024",
    points: [
      "Completed labs on cloud computing, Kubernetes, and APIs.",
      "Hands-on badge earned for real-world GCP use cases.",
    ],
    certificate_link: "https://www.cloudskillsboost.google/public_profiles/dc8bdbbe-ff06-4061-aff0-618e3491f4bb/badges/14452448",
  },
  {
    title: "Full Stack Web Development",
    organization: "Udemy",
    icon: reactjs,
    iconBg: "#EC5252",
    date: "Issued: May 2024",
    points: [
      "Completed 40+ hours of training in MERN stack development.",
      "Built projects and practiced deployment pipelines.",
    ],
    certificate_link: "https://udemy-certificate.s3.amazonaws.com/image/UC-e96ecfaf-bb1b-4618-b8bd-c10d011d1e91",
  },
  {
    title: "AI/ML & Web Development Bootcamp",
    organization: "Naan Mudhalvan (Govt. of Tamil Nadu)",
    icon: meta, // reuse any suitable icon or upload badge screenshot
    iconBg: "#1565C0",
    date: "Issued: April 2024",
    points: [
      "Training in machine learning fundamentals and frontend development.",
      "Conducted via Naan Mudhalvan state program.",
    ],
    certificate_link: "https://api.naanmudhalvan.tn.gov.in/api/v1/college/student_certificate/validate?certificate_no=NME2425EAU29342639290",
  },
];




const projects = [
  {
    name: "Tree Species Classification",
    description:
      "A deep learning model that classifies tree species from images using CNN and transfer learning. Designed for environmental monitoring and botanical research.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "cnn",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: tree, // You can replace this with a relevant screenshot if available
    source_code_link: "https://github.com/VIJAY-VR-17/Tree-Species-Classification",
  },
  {
    name: "Turf Booking App",
    description:
      "A web application that allows users to search for sports turfs, check available slots, and book them online with authentication and dashboard features.",
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
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: turf, // Replace with a screenshot of your app if possible
    source_code_link: "https://github.com/VIJAY-VR-17/Turf-Booking-App",
  },
  {
    name: "Student Management System",
    description:
      "A web-based system to manage student data, including registration, attendance, and performance tracking, built with MERN stack.",
    tags: [
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: student, // Replace with a screenshot or use custom image
    source_code_link: "https://github.com/VIJAY-VR-17/Student-Management-System",
  },
];


export { services, technologies, certifications, projects };
