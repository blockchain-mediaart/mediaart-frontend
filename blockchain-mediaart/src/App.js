import React from 'react';
import { Main, Gallery, MyMediaart, Dashboard, Detail } from './components';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

// import './App.css';

function App() {
  return (
    <Router>
    <div className="App">    
      <Route exact path='/'>
        <Main />
      </Route>  
      <Route exact path='/gallery'>
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
    </div>
    </Router>
  );
}

export default App;
