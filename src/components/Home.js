import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WhatsAppButton from "./Whatsap";
function Home() {
  return (
    <motion.div
      className="home" 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
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
