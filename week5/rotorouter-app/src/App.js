import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/about/about'
import Services from './components/services/services'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
