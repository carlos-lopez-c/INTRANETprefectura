import '../App.css';
import '../css/header.css';
import '../css/barra.css';
import '../css/navCon.css';

import React from 'react'; 
import { Header } from '../components/Header';
import Navbar from '../components/Navbar'
import { Bcolores } from '../components/Bcolores';
import { Nprincipal } from '../components/Nprincipal';
import Carrusel from '../components/Carrusel'
import {Card} from '../components/Card'

function Home() {
  return (
    <div className="App">
      
      <Header imagenh='PREFECTURA-DE-COTOPAXI' />
      <div className='nav11'>
        <Navbar />

      </div>
      <Bcolores />

      <Nprincipal
        initialVideoUrl='https://www.youtube.com/embed/Bxc-KP6W4j8?si=Vwr7O2pLmk5WFU4U' />
      <div className='principal'>
        <Carrusel />
        <Card />
      </div>
    </div>
  );
}

export default Home;
