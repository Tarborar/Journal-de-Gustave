import { NavLink } from 'react-router-dom';
import navButton from '../assets/navButton.png';

import '../styles/main.scss';
import '../styles/components/Header.scss';

function Header(){
    return(
        <nav>
            <ul className="horizontal header__navigation">
                <li>
                    <NavLink to="pictos">
                        <div className='header__button'>
                            <img src={navButton} alt="" />
                            <span className="header__buttonText">Pictos</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="armes">
                        <div className="header__button">
                            <img src={navButton} alt="" />
                            <span className="header__buttonText">Armes</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="journaux">
                        <div className="header__button">
                            <img src={navButton} alt="" />
                            <span className="header__buttonText">Journaux</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="gestrals">
                        <div className="header__button">
                            <img src={navButton} alt="" />
                            <span className="header__buttonText">Gestrals</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="disques">
                        <div className="header__button">
                            <img src={navButton} alt="" />
                            <span className="header__buttonText">Disques</span>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header