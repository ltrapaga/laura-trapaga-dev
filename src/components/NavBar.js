import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

import linkedInIcon from "../assets/img/linkedInIcon.svg";
import githubIcon from "../assets/img/githubIcon.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      //* Returns true if the scrollbars are visible; otherwise, returns false
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            {/* TODO: <img src={logo} alt="Logo" />*/}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="https://drive.google.com/file/d/1V9HsvJLhzFyMd9v_VSa8byHvX1sFoUeX/view?usp=sharing&export=download"
                target="_blank"
                className={
                  activeLink === "resume" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("resume")}
              >
                Resume
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-media-icon">
                <a href="https://www.linkedin.com/in/laura-trapaga-285852262/">
                  <img src={linkedInIcon} alt="" />
                </a>
                <a href="https://github.com/ltrapaga?tab=repositories">
                  <img src={githubIcon} alt="" />
                </a>
              </div>
                <button className="navbar-connect-button">
                  <a href="mailto:lbtrapaga@gmail.com">Connect With Me</a>
                </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
