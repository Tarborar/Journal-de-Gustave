//Hook
import { useState } from 'react';

//Scss
import '../styles/pages/Armes.scss';

//Data
import { armesList } from '../datas/armesList';

//Image
import pictoButton from '../assets/pictoButton.png';
import backgroundData from '../assets/backgroundData.png';
import armeButton from '../assets/armeButton.png';
import dropdownArrow from '../assets/dropdownArrow.svg';

//Component
import Search from '../components/Search';
import ArmesListe from '../components/ArmesListe';
import ArmesDatas from '../components/ArmesDatas';
import PersonnagesListe from '../components/PersonnagesListe';
import ArmesTags from '../components/ArmesTags';

function Armes(){
    const [armeSelected, setArmeSelected] = useState(null); //affichage des datas au click du picto
    const [inputValue, setInputValue] = useState("");
    const [characterTag, setCharacterTag] = useState(null);
    
    const [elementSelected, setElementSelected] = useState('Élément');
    const [rankSSelected, setRankSSelected] = useState('Attribut S');
    const [rankASelected, setRankASelected] = useState('Attribut A');

    const filteredArme = armesList.filter(p => 
        p.nom.toLowerCase().includes(inputValue) &&
        (!characterTag || p.personnage === characterTag) &&
        (elementSelected === 'Élément' || p.element === elementSelected) &&
        (rankSSelected === 'Attribut S' || p.echelle?.includes(rankSSelected)) &&
        (rankASelected === 'Attribut A' || p.echelle?.includes(rankASelected))
    );

    function selectArme(picto){
        setArmeSelected(picto);
        console.log(picto);
    }

    console.log(inputValue);

    return(
        <div className="armes horizontal">
            <div className="vertical armes__allSelect">
                <PersonnagesListe characterTag={characterTag} setCharacterTag={setCharacterTag} />
                <div className='vertical armes__select'>
                    <Search setInputValue={setInputValue} />
                    <ArmesTags 
                        armeButton={armeButton} 
                        dropdownArrow={dropdownArrow}
                        elementSelected={elementSelected}
                        setElementSelected={setElementSelected}
                        rankSSelected={rankSSelected}
                        setRankSSelected={setRankSSelected}
                        rankASelected={rankASelected}
                        setRankASelected={setRankASelected}
                    />
                    <p className='armes__paragraph'>Complétez toutes les armes</p>
                    <ArmesListe 
                        filteredArme={filteredArme} 
                        selectArme={selectArme} 
                        pictoButton={pictoButton} 
                    />
                </div>
                
            </div>
            <div className="armes__data relative">
                <img src={backgroundData} className='backgroundData' alt="" />
                <div className='armes__dataAbsolute'>
                    <ArmesDatas armeSelected={armeSelected}/>
                </div>
            </div>
        </div>
    )
}

export default Armes