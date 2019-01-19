import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieInfo from './pages/MovieInfo';
import TopUp from './pages/TopUp';

const App = () => (
  <Switch>
    <Route exact path='/' component={MovieList}/>
    <Route path='/movie-detail/:movieID' component={MovieInfo}/>
    <Route path='/topup' component={TopUp}/>
    <Route component={MovieList}/>
  </Switch>
);

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById("app"));