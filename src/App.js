import './App.css';
import Header from './component/Header';
import Display from '../src/component/display/Display';
import { createContext, useState  } from 'react';
import ReactSwitch from 'react-switch';



export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  }
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >
    <div className="App" id={theme}>
      <ReactSwitch onChange={toggleTheme} checked={theme === "light"}/>
      <Header />
      <Display />
     
    </div>
    </ThemeContext.Provider >
  );
}

export default App;
