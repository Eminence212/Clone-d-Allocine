import React,{useState,useEffect} from 'react'
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
import { Switch, Route } from 'react-router-dom'
import MoviesSearch from './components/MoviesSearch';
import MovieDetail from './components/MovieDetail';
import VideoMovie from './components/VideoMovie';

const App = () => {
  const api_key = "4649c10d4ba3c182bf2c9432f332bb4d"
  const [genresMovies, setGenresMovies] = useState([])
  const requete_genresMovies = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=fr-FR`
  //Fetching genre
  useEffect(() => {
    fetch(requete_genresMovies)
      .then(function (response) {
        response.json()
          .then(function (data) {
            setGenresMovies(data.genres)
          })
      })
  }, [requete_genresMovies])
 return (<>
    <Header />
    <Switch>
      <Route exact path="/" render={(props) => <Main {...props} genresMovies={genresMovies} />} />
      <Route exact path="/movies-search" render={(props) => <MoviesSearch {...props} genresMovies={genresMovies} />} />
      <Route exact path="/:query?" render={(props) => <MovieDetail {...props} />} />
      <Route exact path="/pay/movie/:query?" render={(props) => <VideoMovie {...props} />} />
    </Switch>
    <Footer />
    <BackToTop />
  </>)
}
export default App;
