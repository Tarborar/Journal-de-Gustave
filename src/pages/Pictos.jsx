import '../styles/pages/Pictos.scss';
import { pictosList } from '../datas/pictosList';
import pictoButton from '../assets/pictoButton.png';
import pictoIconButton from '../assets/pictoIconButton.png';
import searchInput from '../assets/searchInput.svg';
import searchIcon from '../assets/searchIcon.svg';

function Pictos(){
    return(
        <div className="pictos horizontal">
            <div className="pictos__select vertical">
                <div className='relative'>
                    <input type="search" className='pictos__search absolute' />
                    <img src={searchInput} alt="" />
                    <img src={searchIcon} className='pictos__searchIcon' alt="" />
                </div>
                <p className='pictos__paragraph'>Complétez tous les pictos</p>
                <div className='pictos__list'>
                    {
                        pictosList.map((p) => (
                            <div className='pictos__button relative'>
                                <img src={pictoButton} alt="" />
                                <div className='pictos__buttonText absolute horizontal'>
                                    <div className='relative'>
                                        <img src={pictoIconButton} className='pictos__buttonSquare' alt="" />
                                        <img src={p.icone} className='pictos__icon absolute' alt="" />
                                    </div>
                                    <div className='horizontal pictos__buttonTextInfo'>
                                        <div className='pictos__buttonTextNom'>{p.nom}</div>
                                        <div className='pictos__buttonTextPoint'>{p.points}</div>
                                    </div>
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="pictos__data">

            </div>
        </div>
    )
}

export default Pictos