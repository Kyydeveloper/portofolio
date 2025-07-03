import React, { useState, useEffect, useRef } from "react";

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setSidebarOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <h2 className="logo">Muhammad Zaki</h2>

        <nav className="desktop-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#certificate">Certificate</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="right-side">
          <div className="social-links">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/mhd.zaki13"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/M%20Zaki"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@kopites_13"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
              </li>
            </ul>
          </div>

          {isMobile && (
            <div
              className="hamburger"
              onClick={toggleSidebar}
              ref={hamburgerRef}
            >
              <span>&#9776;</span>
            </div>
          )}
        </div>
      </div>

      {isMobile && (
        <div
          className={`sidebar ${isSidebarOpen ? "open" : ""}`}
          ref={sidebarRef}
        >
          <ul className="sidebar-menu">
            <li>
              <a href="#home" onClick={() => setSidebarOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setSidebarOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setSidebarOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setSidebarOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#certificate" onClick={() => setSidebarOpen(false)}>
                Certificate
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setSidebarOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
