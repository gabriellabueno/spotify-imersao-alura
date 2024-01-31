import React from "react";
import { useState, useEffect } from "react";

import Header from "../header/Header";
import "./Main.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [inputHeader, setInputheader] = useState("");
  const [cardPlaylist, setPlaylist] = useState([]);
  const [cardArtists, setArtists] = useState([]);

  // hook to search data from the API
  useEffect(() => {
    fetch(`https://fake-api-spotify.vercel.app/playlists`)
      .then((res) => res.json())
      .then((result) => setPlaylist(result)) // add results
      .catch((err) => console.error(`Error on fetch`, err));
  }, []);

  useEffect(() => {
    if (inputHeader === " ") {
      return;
    }

    fetch(
      `https://fake-api-spotify.vercel.app/artists/?name_like=${inputHeader}`
    )
      .then((res) => res.json())
      .then((result) => setArtists(result)) // add results
      .catch((err) => console.error(`Error on fetch`, err));
  }, [inputHeader]);

  // prop that contains the input's value calls the function
  function shareDat(e) {
    const valor = e.target.value.toLowerCase();
    setInputheader(valor); // send to inputHeader the value converted to lowercase
  }

  return (
    <main>
      <div className="main-container">
        <Header inputVal={shareDat} />

        <div className="playlist-container">
          <div
            id="result-playlist"
            className={ inputHeader ? "hidden" : "result-playlists"}
          >
            <div className="playlist">
              <h1 id="greeting">Welcome!</h1>
              <h2>Take a peek at my musical tastes</h2>
            </div>

            <div className="offer__scroll-container">
              <div className="offer__list">
                <section className="offer__list-item">
                  {inputHeader === "" &&
                    cardPlaylist.map((value, index) => (
                      <React.Fragment key={index}>
                        <a
                          href={value.linkPlaylist}
                          target="_blank"
                          rel="noreferrer"
                          className="cards"
                        >
                          <div className="cards">
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
            <h2 className="artist-title">Artists</h2>

            <div className="grid-container">
              {cardArtists.slice(0, 5).map((value, ind) => (
                <React.Fragment key={ind}>
                  <div className="artist-card" id="artist-card">
                    <div className="card-img">
                      <img
                        src={value.urlImg}
                        id="artist-img"
                        className="artist-img"
                        alt="Artist"
                      />
                      <a
                        href={value.linkArtist}
                        target="_blank"
                        rel="noreferrer"
                        className="play"
                      >
                        <FontAwesomeIcon icon={faPlay} className="fa-play" />
                      </a>
                    </div>

                    <div className="card-text">
                      <a title="" className="vst" href="# ">
                        <span className="artist-name" id="artist-name">
                          {value.name}
                        </span>
                        <span className="artist-genre" id="artist-genre">
                          {value.genre}
                        </span>
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
  );
};

export default Main;
