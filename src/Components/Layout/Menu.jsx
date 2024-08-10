import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

const Menu = ({ isOpen, toggleMenu }) => {
  const playOpenSound = () => {
    const audio = new Audio(process.env.PUBLIC_URL + "/Assets/Click.mp3");
    audio.play();
  };

  const playCloseSound = () => {
    const audio = new Audio(process.env.PUBLIC_URL + "/Assets/close.wav");
    audio.play();
  };

  const handleToggleMenu = () => {
    if (isOpen) {
      playCloseSound();
    } else {
      playOpenSound();
    }
    toggleMenu();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid mx-5 p-2">
          <a className="navbar-brand" href="#">
            W.
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="Services"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  className="nav-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
