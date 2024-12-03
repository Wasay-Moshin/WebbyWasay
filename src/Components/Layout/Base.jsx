import React , { useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
function Base(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu}/>
      {props.children}
      <Footer />
    </div>
  );
}

export default Base;
