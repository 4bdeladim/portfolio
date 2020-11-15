import React from 'react'
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills'
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='app-container'>
      <Router>
      <Navbar />
      <Switch>
        <Route path='/portfolio' component={Home} exact />
        <Route path='/about' component={About} exact />
        <Route path='/skills' component={Skills} exact />
        <Route path='/projects' component={Projects} exact />
        <Route path='/contact' component={Contact} exact />
      </Switch>
 
      </Router>
    </div>
    
  );
}

export default App;
