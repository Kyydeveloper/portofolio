import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WhatsAppButton from "./Whatsap";
const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100vw" },
};
function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="home"
    >
      <div className="home-container">
        <div className="home-left">
          <h1>Selamat Datang</h1>
          <p>
            Hai, saya Muhammad Zaki, seorang mahasiswa IT yang tertarik dalam
            pengembangan web dan desain grafis. Selamat datang di halaman
            portofolio saya!
          </p>
        </div>
        <div className="home-right">
          <img src={`${process.env.PUBLIC_URL}/zaki.jpg`} alt="Zaki" className="profile-photo"/>
        </div>
        <Link to="/contact">
            <button className="contact-button">Hubungi Saya</button>
          </Link>
      </div>
      <WhatsAppButton
        phoneNumber="6285211759216"
        message="Halo,Saya tertarik Dengan layanan Anda"
      />
    </motion.div>
  );
}
export default Home;
