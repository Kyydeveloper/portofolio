import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import WhatsAppButton from "./Whatsap";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_6o2x5jr", // Ganti dengan service ID kamu
        "template_t05lkek", // Ganti dengan template ID kamu
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "O5DsBHDIkk0tw33Ji" // Ganti dengan public key kamu
      )
      .then(() => {
        alert("✅ Pesan berhasil dikirim!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Gagal mengirim pesan.");
      });
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="section-title">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nama:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Masukkan nama Anda"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Masukkan email Anda"
          />
        </div>
        <div>
          <label htmlFor="message">Pesan:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Tulis pesan Anda di sini..."
          />
        </div>
        <button type="submit" className="send-btn">
          Kirim Pesan
        </button>
      </form>

      <WhatsAppButton
        phoneNumber="6283142298339"
        message="Halo, Saya tertarik dengan layanan Anda!"
      />
    </motion.section>
  );
}

export default Contact;
