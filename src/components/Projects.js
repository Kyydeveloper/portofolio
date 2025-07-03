import React from "react";
import { motion } from "framer-motion";

const projectList = [
  {
    title: "Aplikasi Kasir UMKM",
    image: `${process.env.PUBLIC_URL}/project1.jpg`,
    description:
      "Aplikasi kasir sederhana berbasis web untuk UMKM. Fitur: input barang, hitung otomatis, cetak struk.",
    github: "https://github.com/Kyydeveloper/project-kasir",
    demo: "#",
  },
  {
    title: "Landing Page React",
    image: `${process.env.PUBLIC_URL}/project2.jpg`,
    description:
      "Landing page modern untuk promosi produk, dibuat dengan React dan CSS Grid.",
    github: "https://github.com/Kyydeveloper/landing-page",
    demo: "#",
  },
  {
    title: "Website Portfolio",
    image: `${process.env.PUBLIC_URL}/zaki.jpg`,
    description:
      "Website portofolio ini dibuat dengan React untuk menunjukkan skill dan pengalaman saya.",
    github: "https://github.com/Kyydeveloper/portofolio",
    demo: "https://kyydeveloper.github.io/portofolio/",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects-container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h1 className="section-title">My Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p className="text-sm text-gray-700 mb-3">{project.description}</p>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
