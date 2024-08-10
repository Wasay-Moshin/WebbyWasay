import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const portfolioItems = [
  {
    title: "TekTIME",
    imgSrc: "/Assets/tek.png",
    link: "https://tektime.io/", // Replace with the actual link
  },
  {
    title: "AI ChatBot",
    imgSrc: "/Assets/AI.png",
    link: "https://naiad-steel.vercel.app/monitor", // Replace with the actual link
  },
  {
    title: "React vs Angular",
    imgSrc: "/Assets/Rec.png",
    link: "https://code-roast-frontend.vercel.app/", // Replace with the actual link
  },
  {
    title: "Doctor Application",
    imgSrc: "/Assets/Dr.png",
    link: "https://doctor-application.vercel.app/", // Replace with the actual link
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container">
        <h1>My Portfolio</h1>
        <div className="row">
          {portfolioItems.map((item, index) => (
            <div className="col-md-6 mt-5" key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="card">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="img-fluid"
                  />
                  <div className="card-hover">
                    <div className="card-text">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                    <div className="arrow">
                      <FaArrowRight size={30} color="white" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
