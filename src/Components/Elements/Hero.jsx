import React from "react";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-7 mt-5">
            <div className="my-content">
              <h3>I am Wasay</h3>

              <h1 className="text-overlay">Website Developer!!</h1>
              <p>
                {" "}
                I break down complex user experinece problems to create <br />
                integritiy focussed solutions that connect billions of people
              </p>
              <div className="cv">
                <button className="cv-btn">
                  Download Resume &nbsp; <LiaCloudDownloadAltSolid size={23} />
                </button>

                <CgFacebook className="btn-icons" size={35} />

                <FaLinkedinIn className="btn-icons" size={35} />

                <FaGithub className="btn-icons" size={35} />
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-5">
            <div className="my-img">
              <img className="img-fluid" src="Assets/profile-pic.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="hi-background">HI</div>
    </div>
  );
}

export default Hero;
