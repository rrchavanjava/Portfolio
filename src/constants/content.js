import html5Icon from "/assets/icons/frontend/html5.svg";
import css3Icon from "/assets/icons/frontend/css3.svg";
import jsIcon from "/assets/icons/frontend/js.svg";
import reactIcon from "/assets/icons/frontend/react.svg";
import reduxIcon from "/assets/icons/frontend/redux.svg";
import bootstrapIcon from "/assets/icons/frontend/bootstrap.svg";
import jQuery from "/assets/icons/backend/JQuery-Logo.svg";
import tailwindCssIcon from "/assets/icons/frontend/tailwind-css.svg";

// import pythonIcon from "/assets/icons/backend/python.svg";
import javaIcon from "../../assets/icons/backend/java.svg"
import csharpIcon from "../../assets/icons/backend/csharp.svg"
import springIcon from '../../assets/icons/backend/spring.svg'
import springbootIcon from "../../assets/icons/backend/spring_boot.svg"
import hibernateIcon from "../../assets/icons/backend/hibernate.svg"
import dotnet from "../../assets/icons/backend/dotnet.svg"

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

export const ABOUT_CONTENT = `Full Stack Developer with 1 year of professional experience in designing and developing enterprise web applications using .NET Core, C#, React.js, REST APIs, and SQL Server/MySQL. Experienced in building scalable business solutions, implementing secure backend APIs, optimizing database performance, and developing responsive user interfaces. Passionate about writing clean, maintainable code and continuously learning new technologies to deliver high-quality software.`;

export const TECHNOLOGIES = {
  Frontend: [
    { icon: html5Icon, name: "HTML5" },
    { icon: css3Icon, name: "CSS3" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: reactIcon, name: "React" },
    { icon: reduxIcon, name: "Redux" },
    { icon: bootstrapIcon, name: "BootStrap" },
    { icon: jQuery, name: "jQuery" },
    { icon: tailwindCssIcon, name: "Tailwind CSS" },
  ],
  Backend: [
    { icon: javaIcon, name: "Java" },
    { icon: csharpIcon, name: "C#" },
    { icon: dotnet, name: ".NET" },
    { icon: springIcon, name: "Spring" },
    { icon: springbootIcon, name: "SpringBoot" },
    { icon: hibernateIcon, name: "Hibernate" },
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
    year: "Dec 2025 - Present",
    role: "Full Stack Developer",
    company: "Technosync Innovation Pvt. Ltd",
    description: `Worked on Enterprise applications including Jewellery Sync ERP, Task Sync, and Gold Valuation System. Contributed to ERP modules such as Inventory, Purchase, Sales, Production, Job Work, and Customer Management. Developed RESTful APIs using .NET Core, built responsive React.js interfaces, implemented business logic, optimized MySQL database operations, and integrated Excel import/export and bulk data upload features to improve business efficiency.`,
    technologies: ["C#", ".Net Core", "jQuery", "React", "REST API", "MySQL"  ],
  },
   {
    year: "Jan 2025 - July 2025",
    role: ".NET Intern",
    company: "Seven Mentor Pvt. Ltd",
    description: `Completed a Full-Stack Development internship at SevenMentor Pvt. Ltd., working with C# and React.js. Built responsive UIs and REST APIs while integrating frontend and backend for real-world applications.`,
    technologies: ["C#", ".NET Core", "React", "REST API", "MySQL"  ],
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
    title: "Jewellery Sync ERP - Manufacturing ERP & Pro",
    description: "Worked on ERP modules including Inventory, Purchase, Sales, Production, Job Work, and Customer Management. Developed REST APIs using .NET Core, built responsive React.js interfaces, implemented business logic, optimized MySQL queries, and integrated Excel import/export features for enterprise applications.",
    technologies: [".NET Core", "C#", "SQL Server", "HTML","CSS", "Bootstrap", "JavaScript", "jQuery", "REST API", "Git"],
    githubLink: "",
  },
  {
    title: " Task Sync – Team Collaboration & Task Management System",
    description: "Developed a full-stack team collaboration and task management application that enables organizations to create, assign, track, and manage tasks efficiently. Implemented secure user authentication, role-based access control, task status tracking, due dates, priority management, and RESTful APIs. Using SingalR Developed real-time one-to-one and group chat, one-to-one and group video calling, file sharing, and team collaboration features to improve communication and productivity.",
    technologies: [".NET Core", "C#", "React.js", "SQL Server", "REST API", "JavaScript", "Bootstrap", "Git"],
    githubLink: "",
  },
  {
    title: " Gold Valuation System",
    description: "Developed a full-stack Gold Valuation System to calculate the value of old gold ornaments based on purity, weight, wastage, deductions, and current gold rates. Built secure RESTful APIs using .NET Core and developed a responsive React.js interface for efficient valuation. Implemented customer management, valuation history, invoice generation, Excel import/export, Bulk Upload and SQL Server integration to ensure accurate calculations and streamlined business operations.",
    technologies: [".NET Core", "C#", "React.js", "SQL Server", "REST API", "JavaScript", "Bootstrap", "Git"],
    githubLink: "",
  },
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
