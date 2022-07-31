import React, { useRef } from 'react';
import Navbar from './components/NavBar';
import HomePage from './pages/homePage';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const  App = () => {
  const scroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 86,
      behavior: 'smooth',
    });
  }
  const CharacterRef = useRef(null);
  const EpisodesRef = useRef(null);
  const EpisodesRelatedRef = useRef(null);


  const objRef = {
    characterRef: CharacterRef,
    episodesRef: EpisodesRef,
    episodesRelatedRef: EpisodesRelatedRef,
  }
  
  return (
    <div className="App">
      <Navbar  scroll={scroll} objRef={objRef}  />
      <HomePage objRef={objRef} scroll={scroll} />
      <Footer />
    </div>
  );
}

export default App;
