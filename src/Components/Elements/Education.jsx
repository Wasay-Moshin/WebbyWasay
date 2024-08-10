import React from "react";

const experiences = [
  {
    year: "•  2018-2022",
    role: "Bachelor of Science in Computer Science",
    company: " Arid Agriculture University "
  },
  {
    year: "2021 - 2022",
    role: "FULL STACK WEB DEVELOPER",
    company: "Parsons, The New School",
  },
  {
    year: "2020 - 2021",
    role: "UI DESIGNER",
    company: "House of Life, Leeds",
  },
];

function Education() {
  return (
    <div className="edu">
      <div className="container ">
        <div className="row">
        <div className="col-md-6 mt-3">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="year">{exp.year}</div>
                <div className="role">{exp.role}</div>
                <div className="company">{exp.company}</div>
              </div>
            ))}
          </div>
          <div className="col-md-5">
            <h1>My Experience</h1>
          </div>

        </div>   
      </div>
    </div>
  );
}

export default Education;
