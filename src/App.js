import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Image from './components/Image';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div>
          <Navbar />
          <div className='container'>
            <Route exact path='/' component={Home} />
            <Route path='/image' component={Image} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;