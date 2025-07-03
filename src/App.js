import React from "react";
import "./app.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App" style={{ width: "100%", overflowX: "hidden" }}>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certificate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
