import React from "react";
import Hero from "../Components/Elements/Hero";
import Services from "../Components/Elements/Services";
import Skills from "../Components/Elements/Skills";
import Portfolio from "../Components/Elements/Portfolio";
import Experience from "../Components/Elements/Experience";
import Contact from "../Components/Elements/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact/>
    </>
  );
}

export default Home;
