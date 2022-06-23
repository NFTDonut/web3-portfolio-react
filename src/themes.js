import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#fff',
    fontColor: '#000',
    navColor: '#6200EE',
    navBg: 'linear-gradient(0deg, #6200EE, #3700B3)',
    navFontColor: '#fff',
    toggleButtonText: '#fff',
    cardColor: '#fff',
    cardShadow: '-3px -3px 3px rgba(250, 250, 250, 0.5), 3px 3px 5px rgba(0, 0, 0, 0.1)'
};

export const darkTheme = {
    body: '#121212',
    fontColor: '#fff',
    navColor: '#BB86FC',
    navBg: 'linear-gradient(180deg, #B39DDB, #9575CD)',
    navFontColor: '#000',
    toggleButtonText: '#000',
    cardColor: 'rgba(255, 255, 255, 0.05)',
    cardShadow: '-3px -3px 3px rgba(255, 255, 255, 0.02), 3px 3px 5px rgba(0, 0, 0, 0.5)'
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.fontColor};
    }

    .nav {
        background: ${props => props.theme.navBg};
        color: ${props => props.theme.navFontColor};
    }

    .theme-toggle-button {
        color: ${props => props.theme.toggleButtonText};
    }

    .skill-card {
        background-color: ${props => props.theme.cardColor};
        box-shadow: ${props => props.theme.cardShadow};
    }

    .project-card {
        background-color: ${props => props.theme.cardColor};
        box-shadow: ${props => props.theme.cardShadow};
    }
`