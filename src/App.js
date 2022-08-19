import { useState } from 'react';
import Portfolio from './Components/Portfolio/Portfolio';
import Topbar from './Components/Topbar/Topbar';
import Works from './Components/Works/Works';
import Intro from './Components/Intro/Intro';
import Contact from './Components/Contact/Contact';
import './App.scss';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="main">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
