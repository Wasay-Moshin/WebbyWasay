import React from "react";

function Skills() {
  const skills = [
    { icon: "/Assets/html.png", percentage: "85%", label: "HTML" },
    { icon: "/Assets/css.png", percentage: "85%", label: "CSS" },
    { icon: "/Assets/js.webp", percentage: "70%", label: "JavaScript" },
    { icon: "/Assets/react.webp", percentage: "70%", label: "React" },
    { icon: "/Assets/next-js.svg", percentage: "60%", label: "Next JS" },
    { icon: "/Assets/API.png", percentage: "60%", label: "API Intergration" },
    { icon: "/Assets/SCSS.png", percentage: "80%", label: "SASS" },
    { icon: "/Assets/Tailwind.png", percentage: "80%", label: "Tailwind Css" },
    { icon: "/Assets/figma.webp", percentage: "85%", label: "Figma" },
    { icon: "/Assets/Git.png", percentage: "85%", label: "GIT" },
  ];

  return (
    <div className="skills">
      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-12 text-center">
            <h1>My Skills</h1>
            <p>
              We put your ideas and thus your wishes in the form of a unique web
              project that <br /> inspires you and your customers.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-sm-2 card-content pb-4 pt-4">
              <div className="skill-card ">
                <img
                  src={skill.icon}
                  alt={skill.label}
                  className="skill-icon"
                />
                <div className="percentage">{skill.percentage}</div>
              </div>
              <div className="label">{skill.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
