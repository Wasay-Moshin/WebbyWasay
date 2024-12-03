import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Menu = ({ isOpen, toggleMenu }) => {
  const playOpenSound = () => {
    const audio = new Audio(process.env.PUBLIC_URL + "/Assets/Click.mp3");
    audio.play();
  };

  const playCloseSound = () => {
    const audio = new Audio(process.env.PUBLIC_URL + "/Assets/Click.mp3");
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
            onClick={handleToggleMenu} 
            aria-controls="navbarNavDropdown"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            {isOpen ? <AiOutlineClose size={25} /> : <RiMenu3Fill size={25} />} 
          </button>

          {/* Navbar Menu Items */}
          <div
            className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`}
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
                  onClick={handleToggleMenu} 
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
                  onClick={handleToggleMenu}
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
                  onClick={handleToggleMenu}
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
                  onClick={handleToggleMenu}
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
                  onClick={handleToggleMenu}
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
