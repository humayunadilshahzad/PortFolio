import React from 'react';
import './App.css';
import NavBar from './components/top_menu/topMenu'
import About from './pages/about/about'
// import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import Qualification from './pages/qualification/qualification.page'
import Leasure from './pages/leasure/leasure'
import Footer from './components/footer/footer'
import Contact from './pages/contact/contact'

import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <NavBar />
          <Switch>
            <Route path='/' exact component={About}/>
            <Route path='/about' component={About}/>
            <Route path='/projects' component={Projects} />
            <Route path='/qualification' component={Qualification} />
            <Route path='/leasure' component={Leasure} />
            <Route path='/contact' component={Contact} />
          </Switch>
        <Footer />
      </header>
    </div>
    </Router>
  );
}

export default App;
