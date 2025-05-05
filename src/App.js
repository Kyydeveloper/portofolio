import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";

const Home = lazy(() => import("./components/Home"));
const Header = lazy(() => import("./components/Header"));
const Skills = lazy(() => import("./components/Skills"));
const About = lazy(() => import("./components/About"));
const Certificate = lazy(() => import("./components/Certificate"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificate" element={<Certificate />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
