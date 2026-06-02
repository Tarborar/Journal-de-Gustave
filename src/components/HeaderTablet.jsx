import { NavLink} from 'react-router-dom';
import logo from '../assets/logo.png';
import hamburgerButton from '../assets/boutonHamburger.svg';

import '../styles/components/HeaderTablet.scss';

function HeaderTablet(){
    return(
        <div className='headerTablet horizontal'>
            <NavLink to="/">
                <img src={hamburgerButton} className='hamburgerButton' alt="" />
            </NavLink>
            <img src={logo} className='logoTablet' alt="" /> 
        </div>
    )
}

export default HeaderTablet