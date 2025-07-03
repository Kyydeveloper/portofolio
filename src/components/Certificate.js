import React, { useState } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Kelas Landing Page",
    image: `${process.env.PUBLIC_URL}/sertifikat1.jpg`,
  },
  {
    title: "Sertifikat UI/UX",
    image: `${process.env.PUBLIC_URL}/sertifikat2.jpg`,
  },
  {
    title: "Sertifikat JavaScript",
    image: `${process.env.PUBLIC_URL}/sertifikat3.jpg`,
  },
];

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.section
      id="certificate"
      className="certificates"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-bold text-center mb-10">My Certificates</h1>

      <div className="certificate-list">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="certificate-card"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(cert.image)}
          >
            <img src={cert.image} alt={cert.title} />
            <p style={{ marginTop: "10px", color: "#ccc" }}>{cert.title}</p>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img
              src={selectedImage}
              alt="Certificate"
              className="modal-image"
            />
            <button className="close-modal">Tutup</button>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Certificate;
