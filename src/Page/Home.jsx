import React from "react";
import Hero from "../Components/Elements/Hero";
import Services from "../Components/Elements/Services";
import Skills from "../Components/Elements/Skills";
import Portfolio from "../Components/Elements/Portfolio";
import Experience from "../Components/Elements/Experience";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Skills />
      <Portfolio />
      <Experience />
    </>
  );
}

export default Home;
