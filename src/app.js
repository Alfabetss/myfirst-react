import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reducers from './duck';
import thunk from "redux-thunk";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faChevronLeft, faChevronRight, faMoneyBillAlt, faClock, faEllipsisH, faPlayCircle, faUserCircle, faWallet, faStar, faFilm, faSearch } from '@fortawesome/free-solid-svg-icons'

import MovieList from './pages/MovieList.jsx';
import MovieInfo from './pages/MovieInfo.jsx';
import MovieHistory from './pages/MovieHistory.jsx';
import reducers from './utils/reducer'


library.add(faCheckSquare, faChevronLeft, faChevronRight, faMoneyBillAlt, faClock, faEllipsisH, faPlayCircle, faUserCircle, faWallet, faStar, faFilm, faSearch)

// const store = createStore(reducers, applyMiddleware(thunk));

const store = createStore(reducers)

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route path='/?page=:params' component={MovieList}/>
      <Route exact path='/:movieID' component={MovieInfo}/>
      <Route exact path='/movie/history' component={MovieHistory}/>
      <Route component={MovieList}/>
    </Switch>
  </Provider>
);

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById("app"));