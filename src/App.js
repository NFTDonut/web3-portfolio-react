import React, { useState, useEffect } from 'react';
import './styles.css';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js"
import Aos from 'aos';
import "aos/dist/aos.css";

const StyledApp = styled.div`
`

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === 'light' ? setTheme("dark") : setTheme("light");
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Navbar toggleTheme={toggleTheme}/>
        <About useEffect={useEffect}/>
        <Skills useEffect={useEffect}/>
        <Projects />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
