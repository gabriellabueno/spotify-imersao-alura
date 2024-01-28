import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    return (

        <nav class="header__navigation">

            <div class="navigation" id="navigation">
                <button class="arrow-left">
                    <FontAwesomeIcon icon={faChevronLeft} alt="Left arrow. Go back."/>
                </button>
                <button class="arrow-right">
                    <FontAwesomeIcon icon={faChevronRight} alt="Right arrow. Go foward."/>
                </button>
            </div>

            <div class="header__search">
                <FontAwesomeIcon icon={faSearch} class="fa-search"/>
                <input id="search-input" type="text" maxlength="800" placeholder="What do you want to listen?" />
            </div>
            
            <div class="header__login">
                <button class="signup">Sign up</button>
                <button class="login">Log in</button>
            </div>
        </nav>

        )
    }
    
export default Header