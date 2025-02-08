import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./Whatsap";

function About() {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>About Me</h1>
      <p>
        Halo, saya Muhammad Zaki, seorang mahasiswa Teknik informatika dengan
        spesialisasi di bidang pengembangan web. Sejak memulai perjalanan saya
        di dunia teknologi, saya telah mengasah keterampilan dalam berbagai
        teknologi web seperti <b>HTML, CSS, JavaScript, dan Python</b>. Saya
        juga berpengalaman dalam menggunakan framework
        <b> React.js dan Node.js</b>, yang memungkinkan saya untuk membangun
        aplikasi web dinamis dan interaktif. Sebagai seseorang yang selalu
        bersemangat untuk belajar hal baru, saya tidak hanya fokus pada
        pengembangan web, tetapi juga memiliki ketertarikan besar dalam
        <b> Desain grafis</b>. Dengan keterampilan desain, saya dapat
        menciptakan antarmuka yang menarik dan ramah pengguna untuk aplikasi
        atau situs web yang saya bangun. Saya percaya bahwa kombinasi antara
        kemampuan teknis dan desain yang baik sangat penting untuk menciptakan
        pengalaman pengguna yang luar biasa. Dengan pemahaman yang kuat dalam
        pengembangan <i> front-end</i> dan <i>back-end</i>, serta keterampilan
        desain yang mendalam, saya siap untuk mengambil tantangan dalam
        menciptakan solusi teknologi yang inovatif. Tujuan saya adalah untuk
        terus mengembangkan keterampilan saya di dunia pengembangan perangkat
        lunak dan desain agar dapat berkontribusi dalam proyek-proyek yang
        memberikan dampak positif pada masyarakat, sambil terus memperluas
        wawasan saya dalam dunia teknologi yang terus berkembang.
      </p>
      <WhatsAppButton
        phoneNumber="6285211759216"
        message="Halo,Saya tertarik Dengan layanan Anda"
      />
    </motion.section>
  );
}

export default About;
