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

const App = () =>
(
  <>
    <Header />
    <Main />
    <Footer />
  </>

)

export default App;
