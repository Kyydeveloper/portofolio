import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./Whatsap";
const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100vw" },
};
function Projects() {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      id="project"
    >
      <h1>My Projects</h1>
      <ul className="projects">
        <li>
          <h3>Project 1</h3>
          <p>A description of the first project.</p>
        </li>
        <li>
          <h3>Project 2</h3>
          <p>A description of the second project.</p>
        </li>
        <li>
          <h3>Project 3</h3>
          <p>A description of the third project.</p>
        </li>
      </ul>
      <WhatsAppButton
        phoneNumber="6285211759216"
        message="Halo,Saya tertarik Dengan layanan Anda"
      />
    </motion.section>
  );
}

export default Projects;
