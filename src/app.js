import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MovieList from './pages/MovieList.jsx';
import MovieInfo from './pages/MovieInfo.jsx';
import TopUp from './pages/TopUp.jsx';

import { createStore, applyMiddleware } from 'redux';
import reducers from './duck';
import thunk from "redux-thunk";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faChevronLeft, faChevronRight)

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path='/:page' component={MovieList}/>
      <Route path='/movie-detail/:movieID' component={MovieInfo}/>
      <Route path='/topup' component={TopUp}/>
      <Route component={MovieList}/>
    </Switch>
  </Provider>
);

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById("app"));