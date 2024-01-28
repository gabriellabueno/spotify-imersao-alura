import './Main.css'
import Playlist1 from '../../assets/playlist/1.jpeg'
import Playlist2 from '../../assets/playlist/2.jpeg'
import Playlist3 from '../../assets/playlist/3.jpg'
import Playlist4 from '../../assets/playlist/4.jpeg'
import Playlist5 from '../../assets/playlist/5.jpg'
import Playlist6 from '../../assets/playlist/6.jpeg'
import Playlist7 from '../../assets/playlist/7.jpg'
import Playlist8 from '../../assets/playlist/8.jpeg'
import Playlist9 from '../../assets/playlist/9.jpg'
import Playlist10 from '../../assets/playlist/10.jpeg'
import Playlist11 from '../../assets/playlist/11.jpeg'
import Playlist12 from '../../assets/playlist/12.jpeg'
import Playlist13 from '../../assets/playlist/13.jpeg'
import Playlist14 from '../../assets/playlist/14.jpg'
import Playlist15 from '../../assets/playlist/15.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Main = () => {

    return (
        
        <div class="main-container">

            <div class="playlist-container">
                <div id="result-playlist">

                    <div class="playlist">
                        <h1 id="greeting">Welcome!</h1>
                        <h2>Take a peek at my musical tastes</h2>
                    </div>
                    
                    <div class="offer__scroll-container">
                        <div class="offer__list">
                            <section class="offer__list-item">
                                
                                <a href="https://open.spotify.com/playlist/37i9dQZF1DX5trt9i14X7j" class="cards">   
                                <div class="cards card1">
                                    <img src={Playlist1} alt="Programming Focus" />
                                    <span>Programming Focus</span>
                                </div>
                                </a>

                                <a href="https://open.spotify.com/show/2p0Vx75OmfsXktyLBuLuSf" class="cards" target="_blank" rel="noopener noreferrer">
                                <div class="cards card2">
                                    <img src={Playlist2} alt="Podcasts" />
                                    <span>Podcasts</span>
                                </div>
                                </a>

                                <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evNZVVBPG" class="cards">
                                <div class="cards card3">
                                    <img src={Playlist3} alt="Lana Del Rey" />
                                    <span>Lana Del Rey</span>
                                </div>
                                </a>

                                <a href="https://open.spotify.com/playlist/37i9dQZF1DXcfZ6moR6J0G" class="cards">
                                <div class="cards card4">
                                    <img src={Playlist4} alt="Metal" />
                                    <span>Metal</span>
                                </div>
                                </a>

                                <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO1qMnXD" class="cards">
                                <div class="cards card5">
                                    <img src={Playlist5} alt="Mitski" />
                                    <span>Mitski</span>
                                </div>
                                </a>

                                <a href="https://open.spotify.com/playlist/37i9dQZF1E4wuxhMrkbsN2" class="cards">
                                <div class="cards card6">
                                    <img src={Playlist6} alt="Bass" />
                                    <span>Bass</span>
                                </div>
                                </a>

                                <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO0gnPos" class="cards">
                                <div class="cards card7">
                                    <img src={Playlist7} alt="MPB" />
                                    <span>MPB</span>
                                </div>
                                </a>

                                <a href="https://open.spotify.com/playlist/37i9dQZF1DX04mASjTsvf0" class="cards">
                                <div class="cards card8">
                                    <img src={Playlist8} alt="R&B" />
                                    <span>R&B</span>
                                </div>
                                </a>

                                <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO3RbzfW" class="cards">
                                <div class="cards card9">
                                    <img src={Playlist9} alt="Rammstein" />
                                    <span>Rammstein</span>
                                </div>
                                </a>

                                <a href="https://open.spotify.com/playlist/37i9dQZF1DX1MUPbVKMgJE" class="cards">
                                <div class="cards card10">
                                    <img src={Playlist10} alt="Disco" />
                                    <span>Disco</span>
                                </div>
                                </a>

                                <a href="https://open.spotify.com/playlist/37i9dQZF1DX2NwU6NbPUdo" class="cards">
                                <div class="cards card11">
                                    <img src={Playlist11} alt="Indie" />
                                    <span>Indie</span>
                                </div>
                                </a>

                                <a href="https://open.spotify.com/playlist/3uvjvy5U4VhxMgIv0m0sCm" class="cards">
                                <div class="cards card12">
                                    <img src={Playlist12} alt="Crypta" />
                                    <span>Crypta</span>
                                </div>
                                </a>

                                <a href="https://open.spotify.com/playlist/37i9dQZF1DWUZv12GM5cFk" class="cards">
                                <div class="cards card13">
                                    <img src={Playlist13} alt="Pop" />
                                    <span>Pop</span>
                                </div>
                                </a>

                                <a href="https://open.spotify.com/playlist/37i9dQZF1DZ06evO0lb5gk" class="cards">
                                <div class="cards card14">
                                    <img src={Playlist14} alt="Gojira" />
                                    <span>Gojira</span>
                                </div>
                                </a>

                                <a href="https://open.spotify.com/playlist/37i9dQZF1DWZqd5JICZI0u" class="cards">
                                <div class="cards card15">
                                    <img src={Playlist15} alt="Meditation" />
                                    <span>Meditation</span>
                                </div>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>

                <div id="result-artist" class="hidden">
                    <div class="grid-container">
                        <div class="artist-card" id="artist-card">
                            <div class="card-img">
                                <img id="artist-img" class="artist-img" alt="Artist" />
                                <div class="play">
                                    <FontAwesomeIcon icon={faPlay}  class="fa-play"/>
                                </div>
                            </div>
                            <div class="card-text">
                                <a title="" class="vst" href=" ">
                                    <span class="artist-name" id="artist-name"></span>
                                    <span class="artist-genre" id="artist-genre"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        )
    }
    
export default Main