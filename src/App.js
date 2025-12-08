
import './App.css';
import Component from './Component';
import About from './About';
import Work from './Work';
import Contact from "./Contact";
import Navbar from './navBar'

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
