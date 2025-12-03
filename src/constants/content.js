import html5Icon from "/assets/icons/frontend/html5.svg";
import css3Icon from "/assets/icons/frontend/css3.svg";
import jsIcon from "/assets/icons/frontend/js.svg";
import reactIcon from "/assets/icons/frontend/react.svg";
import reduxIcon from "/assets/icons/frontend/redux.svg";
import bootstrapIcon from "/assets/icons/frontend/bootstrap.svg";
import materialUiIcon from "/assets/icons/frontend/material-ui.svg";
import tailwindCssIcon from "/assets/icons/frontend/tailwind-css.svg";

// import pythonIcon from "/assets/icons/backend/python.svg";
import nodeIcon from "../../assets/icons/backend/nodejs.svg";
import javaIcon from "../../assets/icons/backend/java.svg"
import csharpIcon from "../../assets/icons/backend/csharp.svg"
import springIcon from '../../assets/icons/backend/spring.svg'
import springbootIcon from "../../assets/icons/backend/spring_boot.svg"
import hibernateIcon from "../../assets/icons/backend/hibernate.svg"

import mysqlIcon from "/assets/icons/backend/mysql.svg";
import postgresqlIcon from "/assets/icons/backend/postgresql.svg";

import gitIcon from "/assets/icons/others/git.svg";
import githubIcon from "/assets/icons/others/github.svg";
import dockerIcon from "/assets/icons/others/docker.svg";
import postmanIcon from "/assets/icons/others/postman.png";


import awsProfessionalBadge from "/assets/images/aws-professional-badge.png";
import awsDeveloperBadge from "/assets/images/aws-developer-badge.png";
import awsSolutionBadge from "/assets/images/aws-solutions-badge.png";
import terraformBadge from "/assets/images/terraform-associate-badge.png";

export const ABOUT_CONTENT = `Motivated Full Stack Developer and a Msc student specialized in Computer Science. With a solid background in Computer science, Web development and Backend Developement, I build solutions that leverage data for real-world impact. Explore my projects to see how I combine technical skills with creative problem-solving.

`;

export const TECHNOLOGIES = {
  Frontend: [
    { icon: html5Icon, name: "HTML5" },
    { icon: css3Icon, name: "CSS3" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: reactIcon, name: "React" },
    { icon: reduxIcon, name: "Redux" },
    { icon: bootstrapIcon, name: "BootStrap" },
    { icon: materialUiIcon, name: "Material UI" },
    { icon: tailwindCssIcon, name: "Tailwind CSS" },
  ],
  Backend: [
    { icon: javaIcon, name: "Java" },
    { icon: csharpIcon, name: "C#" },
    { icon: springIcon, name: "Spring" },
    { icon: springbootIcon, name: "SpringBoot" },
    { icon: hibernateIcon, name: "Hibernate" },
    { icon: nodeIcon, name: "Node JS" },  
  ],
  Database: [
    { icon: mysqlIcon, name: "MySQL" },
    { icon: postgresqlIcon, name: "PostgreSQL" },
   
  ],
  Others: [
    { icon: gitIcon, name: "Git" },
    { icon: githubIcon, name: "GitHub" },
    { icon: dockerIcon, name: "Docker" },
    { icon: postmanIcon, name: "Postman" },
    
  ],
};

export const EXPERIENCES = [
  {
    year: "Jan 2025 - July 2025",
    role: "Java Intern",
    company: "Seven Mentor Pvt. Ltd",
    description: `Completed a Full-Stack Development internship at SevenMentor Pvt. Ltd., working with Java (Spring Boot) and React.js. Built responsive UIs and REST APIs while integrating frontend and backend for real-world applications.`,
    technologies: ["Core Jav", "Advance Java", "React", "REST API", "MySQL"  ],
  },
  {
    year: "Jan 2023 - Mar 2023",
    role: "Data Science Intern",
    company: "Teachnooc Services",
    description: `Developed predictive models using machine learning to forecast business trends. Cleaned, processed, and visualized data using Python (Pandas, NumPy, Matplotlib). Created dashboards and reports using Power BI/Tableau for data-driven insights.`,
    technologies: ["Python", "Pandas", "Numpy", "Power BI", "Tableau" , 'Matplotlib'],
  },
];

export const EDUCATION = [
  {
    institution: "G H Raisoni College of Arts Commerce and Science Wagholi(Pune)",
    university: "Savitribai Phule Pune University",
    percentage: "8.00 CGPA",
    year: "2023-2025",
    degree: "Msc(Cpmuter Science)",
    location: "Pune, Maharashtra",
    level: "college",
  },
  {
    institution: "Pamashri Vikhe Patil College of Arts Commerce and Science Pravaranagar(Loni)",
    university: "Savitribai Phule Pune University",
    percentage: "7.65 CGPA",
    year: "2020-2023",
    degree: "Bsc(Computer Science)",
    location: "Pravaranagar, Maharashtra",
    level: "higher-secondary",
  },
  {
    institution: "Jawahar Junior College Chanda",
    university: "Maharashtra State Board of Secondary and Higher Secondary Education",
    percentage: "60.15%",
    year: "2020",
    degree: "Higher Secondary (12<sup>th</sup>)",
    location: "Chanda, Maharashtra",
    level: "Higher Secondary",
  },
];

export const PROJECTS = [

  {
    title: " Billing Software System",
    description:
      "Built a billing system with dynamic invoice creation, automated PDF generation, and a WhatsApp integration that enables users to send invoices instantly. Includes customer/product management, tax calculation, and a responsive interface for fast billing.",
    technologies: ["Spring Boot","Hibernate","MySQL","React","REST API"],
    githubLink: "",
  },

  {
    title: "Vehicle Servicing & Maintenance Center",
    description:
      "A web-based system designed for vehicle service center managers to store and manage customer, vehicle, and service information efficiently. It helps track service records, appointments, and job updates in one centralized platform.",
    technologies: ["JAVA/J2EE", "JSP", "HTML", "CSS", "JavaScript", "MYSQL"],
    githubLink: "",
  },

];

export const CERTIFICATIONS = [
  {
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services Training and Certification",
    date: "April 2024",
    link: "https://www.credly.com/badges/00c91b85-4948-4275-88c3-d143e0e888e7/public_url",
    badge: awsProfessionalBadge,
  },
  {
    title: "AWS Certified Developer – &nbsp;&nbsp;&nbsp;Associate",
    issuer: "Amazon Web Services Training and Certification",
    date: "Nov 2023",
    link: "https://www.credly.com/badges/8e7b5ea8-0ab4-40ca-b77a-6cc81aed5213/public_url",
    badge: awsDeveloperBadge,
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services Training and Certification",
    date: "May 2023",
    link: "https://www.credly.com/badges/c356f476-c70b-4bd3-8af8-131497d7bb3a/public_url",
    badge: awsSolutionBadge,
  },
  {
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    date: "Jan 2025",
    link: "https://www.credly.com/badges/45a9c170-5f5c-44f5-abc6-39084c098107/public_url",
    badge: terraformBadge,
  },
];

export const CONTACT = {
  phoneNo: "+91 8261858471",
  email: "rochavan1055@gmail.com",
  linkedin: "https://www.linkedin.com/in/rohan-chavan-2911ba2a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/rrchavanjava",
  instagram:
    "https://www.instagram.com/rohan_chavan359?igsh=MXdwbWhrdGVrb3hr",
};
