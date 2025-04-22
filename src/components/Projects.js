import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./Whatsap";

const projects = [
  {
    title: "Portofolio Pribadi",
    image: "/zaki.jpg",
    description: "Ini adalah tampilan website portofolio saya.",
  },
  {
    title: "Proyek 2",
    image: "/images/project2.jpg",
    description: "Ini adalah proyek kedua saya.",
  },
  {
    title: "Proyek 3",
    image: "/images/project3.jpg",
    description: "Ini adalah proyek ketiga saya.",
  },
];

const ProjectCard = ({ title, image, description, delay }) => {
  return (
    <motion.div
  className="project-card"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay }}
>
  <img src={image} alt={title} className="project-image" />
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
          <ProjectCard key={index} {...project} delay={index * 0.2} />
        ))}
      </div>
      <WhatsAppButton
        phoneNumber="6285211759216"
        message="Halo, Saya tertarik dengan layanan Anda"
      />
    </motion.section>
  );
};

export default Projects;
