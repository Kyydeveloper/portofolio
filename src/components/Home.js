import { motion } from "framer-motion";
import WhatsAppButton from "./Whatsap";

function Home() {
  return (
    <motion.section
      id="home"
      className="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="home-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
          Selamat Datang
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-justify max-w-xl">
          Hai, saya <b>Muhammad Zaki</b>, mahasiswa IT yang tertarik dalam
          pengembangan web dan desain grafis. Selamat datang di halaman
          portofolio saya!
        </p>
      </div>

      <div className="home-right">
        <img
          src={`${process.env.PUBLIC_URL}/zaki.jpg`}
          alt="Zaki"
          className="profile-photo"
        />
        <a href="#contact">
          <button className="contact-button">Hubungi Saya</button>
        </a>
      </div>

      <WhatsAppButton
        phoneNumber="6283142298339"
        message="Halo, Saya tertarik dengan layanan Anda"
      />
    </motion.section>
  );
}

export default Home;
