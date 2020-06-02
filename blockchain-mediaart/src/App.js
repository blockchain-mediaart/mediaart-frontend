import React from 'react';

import {Main, Gallery, MyMediaart, Dashboard, Detail } from './components';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import logo from './img/abclogo.png';
import Web3ProviderConnectButton from './components/web3s/Web3ProviderConnectButton';



function App() {

  return (
    
    <Router>
      <div className="App">
        <header>
          <div className = "logo">
            <img src={logo} width="200" height= "120" />
          </div>
          <div className = "metamask_login">
          <Web3ProviderConnectButton />
         </div>
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
          <Route exact path='/mosa-lina'>
            <Dashboard mediaArt={{title: "Mosa Lina"}} />
          </Route>
          <Route path='/mosa-lina/'>
            <Detail mediaArt={{title: "Mosa Lina"}} commit={{id: 9}} />
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
