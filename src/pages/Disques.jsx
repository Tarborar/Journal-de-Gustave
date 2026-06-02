//Hook
import { useState } from 'react';
import useWindowWidth from '../hooks/useWindowWidth';

//Scss
import '../styles/pages/Disques.scss';

//Data
import { disquesList } from '../datas/disquesList';

//Image
import pictoButton from '../assets/pictoButton.png';
import disqueImage from '../assets/disque.webp';
import backgroundData from '../assets/backgroundData.png';
import titleDecoration from '../assets/titleDecoration.png';
import closeModal from '../assets/fermetureModale.svg';

//Component
import Search from '../components/Search';
import DisquesListe from '../components/DisquesListe';
import DisquesDatas from '../components/DisquesDatas';
import HeaderTablet from '../components/HeaderTablet';


function Disques(){
    const [disqueSelected, setDisqueSelected] = useState(null); //affichage des datas au click du picto
    const [inputValue, setInputValue] = useState("");
    const [isDisqueOpen, setIsDisqueOpen] = useState(false);

    const windowWidth = useWindowWidth();
    const isTablet = windowWidth < 1024;

    const filteredDisque = disquesList.filter(p => {
        return p.nom.toLowerCase().includes(inputValue);
    })

    function selectDisque(disque){
        setDisqueSelected(disque);
        setIsDisqueOpen(true);
        console.log(disque);
    }

    console.log(inputValue);

    return(
        <div>
            {isTablet ? <HeaderTablet /> : null}
            {isTablet && isDisqueOpen ? (
                <div className="disques__data relative">
                    <img src={backgroundData} className='backgroundData' alt="" />
                    <img src={closeModal} className='closeModal' onClick={() => setIsDisqueOpen(false)} alt="" />
                    <div className='disques__dataAbsolute'>
                        <DisquesDatas disqueSelected={disqueSelected} titleDecoration={titleDecoration} />
                    </div>
                </div>
            ) : (
                <div className="disques horizontal">
                    <div className="disques__select vertical">
                        <Search setInputValue={setInputValue} />
                        <p className='disques__paragraph'>Complétez tous les disques</p>
                        <DisquesListe 
                            filteredDisque={filteredDisque} 
                            selectDisque={selectDisque} 
                            pictoButton={pictoButton} 
                            disqueImage={disqueImage} 
                        />
                    </div>
                    {isTablet ? <Search setInputValue={setInputValue} /> : (
                        <div className="disques__data relative">
                            <img src={backgroundData} className='backgroundData' alt="" />
                            <div className='disques__dataAbsolute'>
                                <DisquesDatas disqueSelected={disqueSelected} titleDecoration={titleDecoration} />
                            </div>
                        </div>
                    )}
                </div>
            )}
            
        </div>
        
    )
}

export default Disques