import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <NavBar hero="hero" about="about" projects="projects" contact="contact" />
      <Element name="hero">
        <Hero />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
}
