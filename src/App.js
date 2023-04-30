import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './component/Header';
import Display from '../src/component/display/Display';
import { createContext, useState  } from 'react';
import Switch from 'react-switch';



export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  }
  
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >
    <div className="App" id={theme}>
      <Switch onChange={toggleTheme} checked={theme === "light"}/>

      <Header />
      <Display />
     
    </div>
    </ThemeContext.Provider >
  );
}

export default App;
