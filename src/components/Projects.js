import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./Whatsap";
const projects = [
  {
    title: "Proyek 1",
    image: "/images/project1.jpg",
    link: "https://example.com/project1",
    description: "Ini adalah proyek pertama saya.",
  },
  {
    title: "Proyek 2",
    image: "/images/project2.jpg",
    link: "https://example.com/project2",
    description: "Ini adalah proyek kedua saya.",
  },
  {
    title: "Proyek 3",
    image: "/images/project3.jpg",
    link: "https://example.com/project3",
    description: "Ini adalah proyek ketiga saya.",
  },
];

const ProjectCard = ({ title, image, link, description }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }} 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="project-image" />
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.section
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="section-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <WhatsAppButton
        phoneNumber="6285211759216"
        message="Halo,Saya tertarik Dengan layanan Anda"
      />
    </motion.section>
  );
};

export default Projects;
