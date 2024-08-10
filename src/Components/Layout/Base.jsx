import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
function Base(props) {
  return (
    <div>
      <Menu />
      {props.children}
      <Footer />
    </div>
  );
}

export default Base;
