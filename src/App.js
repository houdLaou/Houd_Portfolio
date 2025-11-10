
import './App.css';
import Content from './content';
import Component from './Component';
import About from './About';
import Work from './Work';
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Content/>
          <Component/>
          <About/>
          <Work/>
          <Contact/>
      </header>
    </div>
  );
}

export default App;
