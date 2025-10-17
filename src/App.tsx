import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import MyWork from "./components/Mywork";
const App = () => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      {/* <Experience /> Professional Experience */}
      <MyWork /> {/* Combined Work Showcase */}
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
