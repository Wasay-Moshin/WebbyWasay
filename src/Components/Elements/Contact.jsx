import React from "react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div>
          <h1>Get In Touch</h1>
          <p>
            Love to hear from you. Connect with me through any of these
            platforms.
          </p>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-3 pb-3">
            <a
              href="https://wa.me/+923315786822"
              target="_blank"
              rel="noopener noreferrer"
              className="card custom-card text-center"
            >
              <div className="card-body">
                <FaWhatsapp
                  className="fab fa-whatsapp fa-2x text-success mb-3"
                  size={40}
                />
                <p className="card-title">+92 331 5786822</p>
              </div>
            </a>
          </div>
          <div className="col-md-3 pb-3">
            <a
              href="https://www.linkedin.com/in/wasay-mohsin-062a521a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="card custom-card text-center"
            >
              <div className="card-body">
                <FaLinkedinIn
                  className="fab fa-linkedin fa-2x text-primary mb-3"
                  size={40}
                />
                <p className="card-title">Wasay Mohsin</p>
              </div>
            </a>
          </div>
          <div className="col-md-3 pb-3">
            <a
              href="mailto:mirzawasay276@gmail.com"
              className="card custom-card text-center"
            >
              <div className="card-body">
                <SiGmail
                  className="fas fa-envelope fa-2x text-danger mb-3"
                  size={40}
                />

                <p className="card-title">mirzawasay276@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
