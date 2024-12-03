import React from "react";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineWorkspacePremium } from "react-icons/md";
const experiences = [
  {
    year: "Jun 2023 - August 2024",
    role: "React JS - Developer/Project Manager",
    company: "Interactive Tech Solutions (ITSOLZ)",
  },
  {
    year: "Jan 2023 - March 2023",
    role: "Next JS Intern",
    company: " ZIMO Group",
  },
  {
    year: "Sep 2022 - Dec 2023 ",
    role: "React JS Intern",
    company: " Relymer Labs ",
  },
];
const education = [
  {
    year: "2018-2022",
    role: "Bachelor of Science in Computer Science",
    company: " Arid Agriculture University "
  },
  {
    year: "2016–2018",
    role: "Intermediate in pre-Engineering ",
    company: " Punjab Group of Colleges ",
  },
  {
    year: "2014 - 2016",
    role: "Matriculation",
    company: "The Edcuators School",
  },
];

function Experience() {
  return (
    <div className="exp" id="experience">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="d-flex gap-3">
              <div className="icon">
                <div>
                <MdOutlineWorkspacePremium size={40}/>
                </div>
                <h1>My Experience</h1>
              </div>
            </div>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="year">{exp.year}</div>
                <div className="role">{exp.role}</div>
                <div className="company">{exp.company}</div>
              </div>
            ))}
          </div>
          <div className="col-md-1">
            <div className="vr"></div>
          </div>
          <div className="col-md-5">
            <div className="icon">
              <div>
                <IoSchoolOutline size={45} />
              </div>
              <h1>My Education</h1>
            </div>

            {education.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="year">{exp.year}</div>
                <div className="role">{exp.role}</div>
                <div className="company">{exp.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
