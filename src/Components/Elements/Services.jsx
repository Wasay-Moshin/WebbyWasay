import React from "react";
import DesignList from "./DesignList";

function Services() {
  return (
    <div className="what-i-do" id="Services">
      <div className="container">
        <div className="row">
          <div>
            <h1>My Quality Services</h1>
            <p>
              I put your ideas and thus your wishes in the form of a unique web
              project that
              <br /> inspires you and you customers.
            </p>
          </div>
          <div>
            <DesignList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
