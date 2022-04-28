import React, { Component } from 'react';
import { BrowserRouter as Router , Route } from "react-router-dom";
import  Navigation from "./components/shared/Navigation";
import  Footer from "./components/shared/Footer";

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

import Contact from './components/Contact';
import './App.css';
import Signup from './components/Signup';
// import Sms from './components/Sms';
import Chardham from './places/Chardham';
// import Signup1 from './components/Signup1';
// import { Container } from 'react-bootstrap/lib/tab';
// import { AuthProvider } from './contex/AuthContex';
// import { useLocation } from 'react-router-dom'

class App extends Component {
  render() {
    // function HeaderView() {
    //   const location = useLocation();
    //   console.log(location.pathname);
    //   return <span>Path : {location.pathname}</span>
    // } 
    return ( 
      <Router>  
        <div>
        <Navigation/> 
        <Route exact path="/" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />        
        <Route path="/contact" component={Contact} />
        <Route path="/chardham" component={Chardham}/>
       
           {/* <Signup/>
        
           <Chardham/>
           {/* <Sms /> */}
        <Footer/>  
          
        
        </div>
      </Router>
    );
  }
}

export default App;
