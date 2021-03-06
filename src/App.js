import logo from './logo.svg';
import './index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import React from 'react';

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  function toggleDarkMode() {
    setDarkMode(prevMode => !darkMode)
  }
  return (
    <div className="App">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode} />
      <Main
        darkMode={darkMode} />
    </div>
  );
}

export default App;
