import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar.js';
//import Sample from './components/Sample.js';
import Result from './components/Results/Result.js';
import Mainpage from './Mainpage.js';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="App">
         <Navbar/>

          <Routes>
            <Route  path='*' element={<Mainpage/>}    />
            <Route path='/search' element={<Result/>}  />
            </Routes> 

       
      </div>
      </Router>
        
         
      
    );
  }
}

export default App;
