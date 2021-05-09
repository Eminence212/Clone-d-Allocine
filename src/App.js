import React from 'react'
import Header from './components/head/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import 'jquery/dist/jquery.slim.min.js'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Main from './components/main';
import Footer from './components/sections/Footer';
import './css/styles.css'
import BackToTop from './components/sections/BackToTop';
import {Switch, Route } from 'react-router-dom'
import MoviesSearch from './components/MoviesSearch';
import MovieDetail from './components/MovieDetail';

const App = () =>(
  <>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Main {...props} />} />
        <Route path="/movies-search" render={(props) => <MoviesSearch {...props} />} />
        <Route path="/:query?" render={(props) => <MovieDetail {...props} />} />
      </Switch>
      <Footer />
    <BackToTop/>
  </>
)
export default App;
