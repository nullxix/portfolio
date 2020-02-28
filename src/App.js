import React from 'react';
import Navbar from './components/Navbar.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Resume from './pages/Resume.js';
import Projects from './pages/Projects.js'
import Websites from './pages/Websites.js'
import Else from './pages/Else.js'

function App() {
  return (
    <div 
      
    >
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/hire'><Resume/></Route>
          <Route path='/resume'><Resume/></Route>
          <Route path='/projects'><Projects/></Route>
          <Route path='/websites'><Websites/></Route>
          <Route path='/else'><Else/></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
