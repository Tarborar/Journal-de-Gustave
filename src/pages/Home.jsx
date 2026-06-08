import { NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import homeButton from '../assets/homeButton.png';
import '../styles/pages/Home.scss';
import Header from '../components/Header';

function Home(){
    const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsTablet(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <div className='home vertical gap'>
            <div><img src={logo} className='home__logo' alt="" /></div>
            <div className='home__paragraph'>
                <p>Whoohoooo ! <br />Je suis le guide le plus rapide !</p>
            </div>
            <div className="home__button">
                <NavLink to='/pictos'>
                    <img src={homeButton} alt="" />
                    <span className="home__buttonText">GUIDE</span>
                </NavLink>
            </div>
            {isTablet && <Header />}
        </div>
    )
}

export default Home