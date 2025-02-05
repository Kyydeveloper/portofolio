import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
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

        {!isMobile && (
          <nav className="desktop-nav">
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Skills">Skills</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        )}
        <div className="right-side">
          <div className="social-links">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/mhd.zaki13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/M%20Zaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@kopites_13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
              </li>
            </ul>
          </div>

          {isMobile && (
            <div className="hamburger" onClick={toggleSidebar}>
              <span>&#9776;</span>
            </div>
          )}
        </div>
      </div>

      {isMobile && (
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
