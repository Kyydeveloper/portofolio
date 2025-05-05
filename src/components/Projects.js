import React, { useState } from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./Whatsap";

// Data proyek
const projects = [
  {
    title: "Portofolio Web",
    image: "/portofoliow.png",
    technologies: ["React.js", "Node.js", "CSS"],
    link: "https://kyydeveloper.github.io/portofolio/",
  },
  {
    title: "Proyek 2",
    image: "/images/project2.jpg", // Gambar ada di folder public/images
    description: "Ini adalah proyek kedua saya.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://link-ke-proyek-anda", // Ganti dengan link demo atau GitHub
  },
  {
    title: "Proyek 3",
    image: "/images/project3.jpg", // Gambar ada di folder public/images
    description: "Ini adalah proyek ketiga saya.",
    technologies: ["React", "Firebase"],
    link: "https://link-ke-proyek-anda", // Ganti dengan link demo atau GitHub
  },
];

const ProjectCard = ({
  title,
  image,
  description,
  technologies,
  link,
  delay,
}) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="image-container" onClick={() => setShowImage(true)}>
        <img
          src={`${process.env.PUBLIC_URL}${image}`} // Menggunakan process.env.PUBLIC_URL untuk path gambar
          alt={title}
          className="project-image"
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Technologies: </strong>
        {technologies.join(", ")}
      </p>

      {/* Modal untuk menampilkan gambar lebih besar */}
      {showImage && (
        <div className="image-modal" onClick={() => setShowImage(false)}>
          <div className="modal-content">
            <img
              src={`${process.env.PUBLIC_URL}${image}`} // Menggunakan process.env.PUBLIC_URL untuk path gambar
              alt={title}
              className="modal-image"
            />
            <button
              className="close-button"
              onClick={() => setShowImage(false)}
            >
              X
            </button>
          </div>
        </div>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        Lihat Demo
      </a>
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
