import logo from '../assets/logo.png';
import homeButton from '../assets/homeButton.png';
import '../styles/pages/Home.scss';

function Home(){
    return(
        <div className='home vertical gap'>
            <div><img src={logo} className='home__logo' alt="" /></div>
            <div className='home__paragraph'>
                <p>Whoohoooo ! <br />Je suis le guide le plus rapide !</p>
            </div>
            <div className="home__button">
                <img src={homeButton} alt="" />
                <span className="home__buttonText">GUIDE</span>
            </div>
        </div>
    )
}

export default Home