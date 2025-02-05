import React, { useState } from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./Whatsap";

const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100vw" },
};
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      id="contact"
    >
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button className="send-btn" type="submit">
          Send Message
        </button>
      </form>
      <WhatsAppButton
        phoneNumber="6285211759216"
        message="Halo,Saya tertarik Dengan layanan Anda"
      />
    </motion.section>
  );
}

export default Contact;
