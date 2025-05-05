import React, { useState } from "react";
import { motion } from "framer-motion";

// Daftar Sertifikat
const certificates = [
  {
    title: "Kelas Landing Page",
    image: `${process.env.PUBLIC_URL}/sertifikat1.jpg`, // Menggunakan PUBLIC_URL
  },
  {
    title: "Sertifikat UI/UX",
    image: `${process.env.PUBLIC_URL}/sertifikat2.jpg`, // Menggunakan PUBLIC_URL
  },
  {
    title: "Sertifikat JavaScript",
    image: `${process.env.PUBLIC_URL}/sertifikat3.jpg`, // Menggunakan PUBLIC_URL
  },
];

const Certificate = () => {
  // State untuk modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Fungsi untuk menampilkan modal dengan gambar besar
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <motion.section
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="section-title">My Certificates</h1>

      <div className="projects-grid">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="project-image"
              onClick={() => openModal(cert.image)} // Mengklik gambar untuk membuka modal
            />
          </motion.div>
        ))}
      </div>

      {/* Modal untuk menampilkan gambar besar */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img
              src={selectedImage}
              alt="Certificate"
              className="modal-image"
            />
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Certificate;
