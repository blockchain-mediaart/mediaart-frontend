import React from 'react';
import {Main, Gallery, MyMediaart, Dashboard, Detail } from './components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import logo from './img/abclogo.png';

// import './App.css';

function App() {
  return (
    <Router>
    
      <div className="App">
        <header>
        <img src={logo} width="200" height= "120" />
        </header> 
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>  
          <Route exact path='/Gallery'>
            <Gallery />
          </Route>
          <Route exact path='/MyMediaart'>
            <MyMediaart />
          </Route>
          <Route exact path='/detail'>
            <Detail />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='*'>
            <h1>PAGE NOT FOUND</h1>
          </Route>
        </Switch>
      </div>
    
    </Router>
  );
}

export default App;
