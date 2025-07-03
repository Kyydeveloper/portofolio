import { motion } from "framer-motion";
import WhatsAppButton from "./Whatsap";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center">Tentang Saya</h1>

      <div className="max-w-4xl mx-auto px-4 text-gray-200 leading-relaxed text-justify space-y-5">
        <p>
          Halo! Saya <b>Muhammad Zaki</b>, mahasiswa <b>Teknik Informatika</b>{" "}
          yang memiliki semangat tinggi dalam dunia <b>Web Development</b> dan{" "}
          <b>Desain Grafis</b>.
        </p>
        <p>
          Saya memiliki pengalaman menggunakan{" "}
          <b>HTML, CSS, JavaScript, Python</b> dan beberapa framework modern
          seperti <b>React.js</b>, <b>Tailwind CSS</b>, dan <b>Node.js</b> untuk
          membangun aplikasi web yang <i>responsive</i>, interaktif, dan
          dinamis.
        </p>
        <p>
          Ketertarikan saya pada <b>UI/UX Design</b> juga mendorong saya untuk
          selalu memperhatikan estetika dan kenyamanan pengguna dalam setiap
          proyek yang saya kerjakan.
        </p>
        <p>
          Saya adalah pribadi yang <b>terbuka terhadap pembelajaran baru</b>,
          suka berkolaborasi dalam tim, dan senang mengeksplorasi teknologi
          baru. Selain itu, saya juga mulai memperdalam bidang seperti{" "}
          <b>backend development</b>, <b>API integration</b>, dan{" "}
          <b>automation tools</b>.
        </p>
        <p>
          Di luar coding, saya menikmati desain visual, membaca, dan membuat
          proyek-proyek kecil yang mengasah kreativitas saya. Saya percaya bahwa{" "}
          <i>konsistensi</i>, <i>rasa ingin tahu</i>, dan <i>niat baik</i>{" "}
          adalah kunci untuk terus berkembang di dunia teknologi.
        </p>
        <p>
          Tujuan saya ke depan adalah menjadi seorang <b>Fullstack Developer</b>{" "}
          yang tidak hanya mahir secara teknis, tapi juga mampu memberikan
          solusi nyata yang berdampak untuk masyarakat.
        </p>
      </div>

      <WhatsAppButton
        phoneNumber="6283142298339"
        message="Halo, Saya tertarik dengan layanan Anda"
      />
    </motion.section>
  );
}

export default About;
