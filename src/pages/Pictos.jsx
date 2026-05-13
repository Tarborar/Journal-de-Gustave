//Hook
import { useState } from 'react';

//Scss
import '../styles/pages/Pictos.scss';

//Data
import { pictosList } from '../datas/pictosList';

//Image
import pictoButton from '../assets/pictoButton.png';
import pictoIconButton from '../assets/pictoIconButton.png';
import backgroundData from '../assets/backgroundData.png';

//Component
import Search from '../components/Search';
import PictosListe from '../components/PictosListe';
import PictosDatas from '../components/PictosDatas';

function Pictos(){
    const [pictoSelected, setPictoSelected] = useState(null);

    function selectPicto(picto){
        setPictoSelected(picto);
        console.log(picto);
    }

    return(
        <div className="pictos horizontal">
            <div className="pictos__select vertical">
                <Search />
                <p className='pictos__paragraph'>Complétez tous les pictos</p>
                <PictosListe 
                    pictosList={pictosList} 
                    selectPicto={selectPicto} 
                    pictoButton={pictoButton} 
                    pictoIconButton={pictoIconButton} 
                />
            </div>
            <div className="pictos__data relative">
                <img src={backgroundData} className='backgroundData' alt="" />
                <div className='absolute'>
                    <PictosDatas pictoSelected={pictoSelected}/>
                </div>
            </div>
        </div>
    )
}

export default Pictos