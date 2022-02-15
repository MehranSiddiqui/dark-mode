import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/common/wrapper/Wrapper";
import useLocalStorage from "./hooks/useLocalStorage";
import Toggle from './components/themeToggle/Toggle'
function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [isOn,setIsOn] = useLocalStorage("isOn",false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    setIsOn(!isOn)
  }

  return (
    <Wrapper className={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<></>}></Route>
        </Routes>
      </Router>
    <Toggle onChange={toggleTheme } checked={isOn}>
      
    </Toggle>
      <div className="App">
        <h1>Hello</h1>
      </div>
    </Wrapper>
  );
}

export default App;
