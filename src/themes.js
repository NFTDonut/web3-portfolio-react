import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#fff',
    fontColor: '#000',
    navColor: '#6200EE',
    navFontColor: '#fff',
    toggleButtonText: '#fff'
};

export const darkTheme = {
    body: '#121212',
    fontColor: '#fff',
    navColor: '#BB86FC',
    navFontColor: '#000',
    toggleButtonText: '#000'
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.fontColor};
    }

    .nav {
        background-color: ${props => props.theme.navColor};
        color: ${props => props.theme.navFontColor};
    }

    .theme-toggle-button {
        color: ${props => props.theme.toggleButtonText};
    }
`