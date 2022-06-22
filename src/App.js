import React, { useState } from 'react';
import './styles.css';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js"

const StyledApp = styled.div`
`

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === 'light' ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Navbar toggleTheme={toggleTheme}/>
        <About />
        <Skills />
        <Projects />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
