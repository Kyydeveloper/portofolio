import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import WhatsAppButton from "./Whatsap";

const skillList = [
  {
    title: "Front-end",
    skills: [
      { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
      { name: "Javascript", icon: <FaJs color="#f0db4f" /> },
      { name: "React.js", icon: <FaReact color="#61dbfb" /> },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "Python", icon: <FaPython color="#306998" /> },
      { name: "Node.js", icon: <FaNodeJs color="#68a063" /> },
    ],
  },
  {
    title: "Desain",
    skills: [
     { name: "Canva", icon: <SiCanva color="#00c4cc" /> }
    ],
  },
];

function Skills() {
  return (
    <motion.section
      className="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>My Skills</h1>
      <div className="myskill">
        {skillList.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="skill-item"
                >
                  <span className="icon">{skill.icon}</span>
                  <span className="name">{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <WhatsAppButton
        phoneNumber="6285211759216"
        message="Halo, Saya tertarik dengan layanan Anda"
      />
    </motion.section>
  );
}

export default Skills;
