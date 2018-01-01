import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
}
from 'react-router-dom';
import './App.css';
import './semantic/dist/semantic.min.css';
import About from './components/About';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <div class="title">
            <h1>&emsp;&emsp;&emsp;YAN TING CHEN</h1>
            
          </div>
        <div id="myList" class="banner" >
          <h5><ul>
            <li class="show"><Link to="/">Home&emsp;</Link></li>
            <li>/ &emsp;</li>
            <li><Link to="/about" >About&emsp;</Link></li>
            <li>/ &emsp;</li>
            <li><a href="https://www.cakeresume.com/7817415">Resume&emsp;</a></li>
            <li>/ &emsp;</li>
            <li><a href="https://github.com/YanTingChen">Github</a></li>
          </ul></h5>
          <span class="ns-Indicator"></span>
        </div>
        </header>
        <div id='content'>
          <div id="left"></div>
          <div id='middle'>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
          <div id="right"></div>
        </div>
        <footer>
          <p id="copyright">© 2017 Yan Ting Chen. All Rights Reserved. </p>
        </footer>
      </div>
      </Router>
    );
  }
}

export default App;
