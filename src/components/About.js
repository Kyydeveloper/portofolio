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
        Halo, saya <b>Muhammad Zaki</b>, seorang mahasiswa Teknik Informatika
        dengan minat dan fokus utama dalam pengembangan web modern.
      </p>
      <p>
        Sejak awal mengenal dunia teknologi, saya telah mengasah keterampilan di
        berbagai teknologi seperti <b>HTML, CSS, JavaScript, dan Python</b>.
        Saya juga terbiasa menggunakan framework populer seperti <b>React.js</b>{" "}
        dan <b>Node.js</b> untuk membangun aplikasi web yang interaktif dan
        responsif.
      </p>
      <p>
        Selain itu, saya juga memiliki ketertarikan besar dalam{" "}
        <b>Desain Grafis</b>. Saya percaya bahwa desain yang baik merupakan
        elemen penting untuk menciptakan antarmuka yang menarik dan ramah
        pengguna. Dengan kemampuan ini, saya dapat menyelaraskan fungsionalitas
        teknis dan tampilan visual dalam setiap proyek yang saya kerjakan.
      </p>
      <p>
        Dengan pemahaman yang seimbang antara <i>front-end</i> dan{" "}
        <i>back-end</i>, serta keterampilan desain yang mumpuni, saya siap
        mengambil tantangan untuk menciptakan solusi teknologi yang inovatif dan
        berdampak positif.
      </p>
      <p>
        Tujuan saya adalah terus berkembang dalam dunia{" "}
        <b>pengembangan perangkat lunak</b> dan desain, serta berkontribusi
        dalam proyek-proyek yang membawa manfaat nyata bagi masyarakat luas.
      </p>

      <WhatsAppButton
        phoneNumber="6285211759216"
        message="Halo, Saya tertarik dengan layanan Anda"
      />
    </motion.section>
  );
}

export default About;
