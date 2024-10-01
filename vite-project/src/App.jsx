import { useState } from 'react';
import './App.css'
import { GlobalStyle } from './global.styled.js';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './theme.js';
import { AppRoutes } from './router/AppRoutes.jsx';
import { UserProvider } from './context/UserContext.jsx';


function App() {
  const [changeTheme, setChangeTheme] = useState("light")

  
  return (
    <UserProvider>
    <ThemeProvider theme={changeTheme === "light" ? light : dark}>
    <GlobalStyle />
    <AppRoutes changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
    
    </ThemeProvider>
    </UserProvider>
  )
}

export default App;
