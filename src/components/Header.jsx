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
                        <div className='header__button relative'>
                            <img src={navButton} alt="" />
                            <span className="header__buttonText absolute">Pictos</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="armes">
                        <div className="header__button relative">
                            <img src={navButton} alt="" />
                            <span className="header__buttonText absolute">Armes</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="journaux">
                        <div className="header__button relative">
                            <img src={navButton} alt="" />
                            <span className="header__buttonText absolute">Journaux</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="gestrals">
                        <div className="header__button relative">
                            <img src={navButton} alt="" />
                            <span className="header__buttonText absolute">Gestrals</span>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="disques">
                        <div className="header__button relative">
                            <img src={navButton} alt="" />
                            <span className="header__buttonText absolute">Disques</span>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header