//Hook
import { useState } from 'react';
import useWindowWidth from '../hooks/useWindowWidth';

//Scss
import '../styles/pages/Pictos.scss';

//Data
import { pictosList } from '../datas/pictosList';

//Image
import pictoButton from '../assets/pictoButton.png';
import pictoIconButton from '../assets/pictoIconButton.png';
import backgroundData from '../assets/backgroundData.png';
import closeModal from '../assets/fermetureModale.svg';

//Component
import Search from '../components/Search';
import PictosListe from '../components/PictosListe';
import PictosDatas from '../components/PictosDatas';
import HeaderTablet from '../components/HeaderTablet';

function Pictos(){
    const [pictoSelected, setPictoSelected] = useState(null); //affichage des datas au click du picto
    const [inputValue, setInputValue] = useState("");
    const [isPictoOpen, setIsPictoOpen] = useState(false);

    const windowWidth = useWindowWidth();
    const isTablet = windowWidth < 1024;

    const filteredPicto = pictosList.filter(p => {
        return p.nom.toLowerCase().includes(inputValue);
    })

    function selectPicto(picto){
        setPictoSelected(picto);
        setIsPictoOpen(true);
        console.log(picto);
    }

    console.log(inputValue);

    return(
        <div>
            {isTablet ? <HeaderTablet /> : null}
            {isTablet && isPictoOpen ? (
                <div className="pictos__data relative">
                    <img src={backgroundData} className='backgroundData' alt="" />
                    <img src={closeModal} className='closeModal' onClick={() => setIsPictoOpen(false)} alt="" />
                    <div className='pictos__dataAbsolute'>
                        <PictosDatas pictoSelected={pictoSelected}/>
                    </div>
                </div>
            ) : (
                <div className="pictos horizontal">
                    <div className="pictos__select vertical">
                        {isTablet ? null : <Search setInputValue={setInputValue} />}
                        <p className='pictos__paragraph'>Complétez tous les pictos</p>
                        <PictosListe 
                            filteredPicto={filteredPicto} 
                            selectPicto={selectPicto} 
                            pictoButton={pictoButton} 
                            pictoIconButton={pictoIconButton} 
                        />
                    </div>

                    {isTablet ? <Search setInputValue={setInputValue} /> : (
                        <div className="pictos__data relative">
                            <img src={backgroundData} className='backgroundData' alt="" />
                            <div className='pictos__dataAbsolute'>
                                <PictosDatas pictoSelected={pictoSelected}/>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Pictos