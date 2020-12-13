import React, { Component } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Image from './components/Image';
import Navbar from './components/Navbar';

class App extends Component {

  state = {
    login: true
  }

  render() {
    return (

      <BrowserRouter>
        <div>
          <Navbar />
          <div className='container'>
            <Route exact path='/' component={Home} />
            {/* Redirect, Cara 1: menggunakan Redirect dari react-router-dom */}
            {/* <Route path='/image' render={() => (this.state.login ? <Image /> : (<Redirect to='/' />))} /> */}

            {/* Redirect, Cara 2: menggunakan props.history.push */}
            <Route path='/image' render={(props) => <Image {...props} login={this.state.login} />} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;