import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com"; 
import WhatsAppButton from "./Whatsap"; 
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name, 
      from_email: email,
      message: message, 
      to_name: "Admin_website", 
    };

    emailjs
      .send(
        "service_6o2x5jr",  
        "template_t05lkek", 
        templateParams,
        "O5DsBHDIkk0tw33Ji"   
      )
      .then((response) => {
        alert("Pesan berhasil dikirim! ✅");
        console.log("Sukses:", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Gagal mengirim pesan ❌, coba lagi.");
        console.error("Error:", error);
      });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button className="send-btn" type="submit">
          Send Message
        </button>
      </form>
      <WhatsAppButton
        phoneNumber="6285211759216"
        message="Halo, Saya tertarik dengan layanan Anda!"
      />
    </motion.section>
  );
}

export default Contact;
