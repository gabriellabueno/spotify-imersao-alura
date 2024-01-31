import "./Sidebar.css";
import logoSpotify from "../../assets/icons/logo-spotify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faPlus, faGlobe, faHeadphones } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div id="sidebar" class="sidebar">
      <nav class="sidebar__navigation">
        <div class="logo">
          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logoSpotify} alt="Spotify Logo" />
          </a>
        </div>

        <ul>
          <li>
            <a href="#home">
              <FontAwesomeIcon icon={faHome} class="fa-home" />
              <span class="sidebar-title">Home</span>
            </a>
          </li>
          <li>
            <a href="#search-input">
              <FontAwesomeIcon icon={faSearch} class="fa-search" />
              <span class="sidebar-title">Search</span>
            </a>
          </li>
        </ul>
      </nav>

      <section class="library">
        <div class="library__content">
          <a href=" ">
            <FontAwesomeIcon icon={faHeadphones} class="fa-bars" />
            <span class="sidebar-title">Your Library</span>
          </a>
          <FontAwesomeIcon icon={faPlus} class="fa-plus" />
        </div>

        <div class="first-playlist__content">
          <span class="sidebar-title">Create your first playlist</span>
          <p>It's easy, we'll help you.</p>
          <button>
            <span>Create Playlist</span>
          </button>
        </div>

        <div class="bottom-list">
          <ul>
            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Legal</li>
              <li>Privacy Center </li>
              <li>Privacy Policy</li>
              <li>About Ads</li>
              <li>Acessibility</li>
              <li>Notice at Collection</li>
              <li>Your Privacy Choices</li>
              <li>Cookies</li>
            </a>
          </ul>
        </div>

        <div class="language">
          <button>
            <FontAwesomeIcon icon={faGlobe} />
            <span>English</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
