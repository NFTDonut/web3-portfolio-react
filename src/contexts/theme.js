// import { createContext, useLayoutEffect, useState } from "react";

// const themes = {
//     light: {
//         backgroundColor: 'white',
//         color: '#121212',
//         buttonBackgroundColor: '#121212',
//         buttonTextColor: 'white'
//     },
//     dark: {
//         backgroundColor: '#121212',
//         color: 'white',
//         buttonBackgroundColor: 'white',
//         buttonTextColor: '#121212'
//     }
// };

// export const ThemeContext = createContext();

// export const ThemeProvider = ({children}) => {
//     const [isDark, setIsDark] = useState(false);
//     const theme = isDark ? themes.dark : themes.light;
//     const toggleTheme = () => {
//         localStorage.setItem('isDark', JSON.stringify(!isDark))
//         setIsDark(!isDark);
//     };

//     useLayoutEffect(() => {
//        const isDark = localStorage.getItem('isDark') === "true";
//        setIsDark(isDark);
//     }, [])

//     return (
//         <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
//             {children}
//         </ThemeContext.Provider>
//     );
// }