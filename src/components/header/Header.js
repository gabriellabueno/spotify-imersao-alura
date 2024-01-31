import React from "react";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = ({ inputVal }) => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <FontAwesomeIcon icon={faChevronLeft} alt="Left arrow. Go back." />
        </button>
        <button className="arrow-right">
          <FontAwesomeIcon
            icon={faChevronRight}
            alt="Right arrow. Go foward."
          />
        </button>
      </div>

      <div className="header__search">
        <FontAwesomeIcon icon={faSearch} className="fa-search" />
        <input
          id="search-input"
          type="text"
          maxlength="800"
          placeholder="What do you want to listen?"
          onInput={inputVal}
        />
      </div>

      <div className="header__login">
        <button id="signup" className="signup">
          Sign up
        </button>
        <button id="login" className="login">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Header;
