import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import navButton from '../assets/navButton.png';

import '../styles/main.scss';
import '../styles/components/Header.scss';

function Header() {
    const menu = ['pictos', 'armes', 'journaux', 'gestrals', 'disques'];

    const location = useLocation();
    const navigate = useNavigate();

    const unselectMenu = (path, e) => {
        if (location.pathname === `/${path}`) {
            e.preventDefault();
            navigate('/');
        }
    };

    return (
        <nav>
            <ul className="horizontal header__navigation">
                {menu.map((m) => (
                    <li key={m}>
                        <NavLink to={m} onClick={(e) => unselectMenu(m, e)}>
                            <div className="header__button relative">
                                <img src={navButton} alt="" />
                                <span className="header__buttonText absolute">{m}</span>
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Header;