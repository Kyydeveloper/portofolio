import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./Whatsap";
const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100vw" },
};
function Skills() {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="skills"
    >
      <h1>My Skills</h1>
      <div className="myskill">
        <div className="front">
          <h3>Front-end</h3>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React.js</li>
        </div>
        <div className="back">
          <h3>Back-end</h3>
          <li>Python</li>
          <li>Node.js</li>
        </div>
        <div className="desain">
          <h3>Desain</h3>
          <li>Canva</li>
        </div>
      </div>
      <WhatsAppButton
        phoneNumber="6285211759216"
        message="Halo,Saya tertarik Dengan layanan Anda"
      />
    </motion.section>
  );
}

export default Skills;
