import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
} from "react-icons/fa";

function Skills() {
  const skillList = [
    { name: "HTML", icon: <FaHtml5 color="#e44d26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572b6" /> },
    { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
    { name: "React.js", icon: <FaReact color="#61DBFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
    { name: "Python", icon: <FaPython color="#3776ab" /> },
  ];

  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        My Skills
      </h1>

      <div className="myskill">
        {skillList.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-category"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="skill-item">
              <span className="icon text-3xl">{skill.icon}</span>
              <span className="name text-white text-lg font-semibold">
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
