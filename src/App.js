import Main from './pages/MainScreen';
import Header from './pages/MainHeader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import React, {Component } from 'react';
import Rules from './pages/Rules';
import Rank from './pages/Rank';
import BlackjackGame from './pages/BlackjackGame';

function App () {
    return (
      <div className="wrapper">
         <Header></Header>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Main} exact />
            <Route path='/rules' component={Rules} exact />
            <Route path='/ranks' component={Rank} exact/>
            <Route path='/game' component={BlackjackGame} exact />
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
