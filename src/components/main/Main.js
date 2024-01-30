import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    
  const [inputHeader, setInputheader] = useState('') // useState vai gerenciar o estado do valor da input
  const [single, setSingle] = useState([])

  useEffect(() => {
    /* se o valor da input for vazia */
    if (inputHeader === '') {
      return // não faz nada
    }

    fetch(
      `https://fake-api-spotify.vercel.app/artists/?name_like=${inputHeader}`
    )
      .then((res) => res.json())
      .then((result) => setSingle(result)) // adiciona os resultados ao single
      .catch((err) => console.error(`erro no fetch`, err))
  }, [inputHeader])

  useEffect(() => {

    fetch(`http://fake-api-spotify.vercel.app/playlists`)
      .then((res) => res.json())
      .then((result) => setSingle(result)) // adiciona os resultados ao single
      .catch((err) => console.error(`erro no fetch`, err))
  }, [])



  // prop que tem o valor do input chama uma função shareDados que vamos criar agora
  function shareDados(e) {
    //entao quando essa funcao for chamada
    const valor = e.target.value.toLowerCase() // essa var pega o valor e e deixa em minusculo
    
    setInputheader(valor) // valor é enviado para o inputHeader adicionando o fetch
  }

    return (
    
        <main>
            
            <div className="main-container">
            <Header valorInput={shareDados} />

                <div className="playlist-container">

                    <div id="result-playlist" className={inputHeader ? 'hidden' : 'result-playlists'}>

                        <div className="playlist">
                            <h1 id="greeting">Welcome!</h1>
                            <h2>Take a peek at my musical tastes</h2>
                        </div>
                        
                        <div className="offer__scroll-container">

                            <div className="offer__list">
                                <section className="offer__list-item">

                                {single.map((value, index) => (
                                <React.Fragment key={index}>
                                    <a href={value.linkPlaylist} className="cards">   
                                    <div className="cards card1">
                                        <img src={value.urlImg} alt="Programming Focus" />
                                        <span>{value.name}</span>
                                    </div>
                                    </a>
                                    
                                </React.Fragment>
                                ))}                                                    
                                
                                </section>
                            </div>

                        </div>

                    </div>

                    <div id="result-artist">
                                      
                        {inputHeader !== '' && (
                        <h2 className="artist-title">Artistas</h2>
                        )}

                        <div className="grid-container">
                            
                            {inputHeader !== '' &&
                            single.slice(0, 5).map((value, ind) => (
                            <React.Fragment key={ind}>

                                <div className="artist-card" id="artist-card">
                                    
                                    <div className="card-img">
                                        <img src={value.urlImg} id="artist-img" className="artist-img" alt="Artist" />
                                        <div className="play">
                                            <FontAwesomeIcon icon={faPlay}  className="fa-play"/>
                                        </div>
                                    </div>

                                    <div className="card-text">
                                        <a title="" className="vst" href="# ">
                                            <span className="artist-name" id="artist-name">{value.name}</span>
                                            <span className="artist-genre" id="artist-genre">{value.genre}</span>
                                        </a>
                                    </div>
                            
                                </div>
                            </React.Fragment>
                            ))}

                        </div>

                    </div>

                </div>
                
            </div>
        
        </main>

    )
};
    
export default Main;