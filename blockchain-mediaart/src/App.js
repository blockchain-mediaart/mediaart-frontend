import React from 'react';
import { Main, Gallery,Gallery2, MyMediaart, Dashboard, Detail } from './components';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

// import './App.css';

function App() {
  return (
    <Router>
    
      <div className="App">    
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>  
          <Route exact path='/Gallery'>
            <Gallery />
          </Route>
          <Route exact path='/Gallery2'>
            <Gallery2 />
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
