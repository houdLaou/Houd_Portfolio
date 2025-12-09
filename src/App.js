
import './App.css';
import Component from './components/Profile';
import About from './components/About';
import Work from './components/Work';
import Contact from "./components/Contact";
import Navbar from './components/navBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
          <Component/>
          <About/>
          <Work/>
          <Contact/>
      </header>
    </div>
  );
}

export default App;
