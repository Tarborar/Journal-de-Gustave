//Hook
import { useState } from 'react';

//Scss
import '../styles/pages/Gestrals.scss';

//Data
import { gestralsList } from '../datas/gestralsList';

//Image
import gestralButton from '../assets/pictoButton.png';
import backgroundData from '../assets/backgroundData.png';
import gestral from '../assets/gestral.png'

//Component
import GestralsDatas from '../components/GestralsDatas';

function Gestrals(){
    const [gestralSelected, setGestralSelected] = useState(null); //affichage des datas au click du picto


    function selectGestral(gestral){
        setGestralSelected(gestral);
        console.log(gestral);
    }

    return(
        <div className="gestrals horizontal">
            <div className="gestrals__select vertical">
                <p className='gestrals__paragraph'>Retrouvez tous les Gestrals perdus</p>
                <div className='gestrals__list'>
                    {
                        gestralsList.map((g) => (
                            <div className='gestrals__button relative' onClick={() => selectGestral(g)}>
                                <img src={gestralButton} className='gestralButton' alt="" />
                                <div className='gestral__buttonText absolute horizontal'>
                                    <img src={gestral} className='gestralImage' alt="" />
                                    <div className='horizontal gestrals__buttonTextInfo'>
                                        <div className='gestrals__buttonTextNom'>Gestral perdu</div>
                                    </div>
                                    <div className="gestrals__buttonTextNumero">{g.numero}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="gestrals__data relative">
                <img src={backgroundData} className='backgroundData' alt="" />
                <div className='gestrals__dataAbsolute'>
                    <GestralsDatas gestralSelected={gestralSelected} gestral={gestral}/>
                </div>
            </div>
        </div>
    )
}

export default Gestrals