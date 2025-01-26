import React, { useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { ThemeProvider } from './context/ThemeContext';
import Footer from './components/Footer/Footer';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from './config/emailjs';
import Education from "./components/Education/Education";

function App() {
  useEffect(() => {
    emailjs.init({
      publicKey: emailjsConfig.publicKey,
      privateKey: emailjsConfig.privateKey // Optional if you're using public key
    });
  }, []);

  return (
    <ThemeProvider>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
