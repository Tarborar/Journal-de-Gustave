//Hook
import { useState } from 'react';

//Scss
import '../styles/pages/Disques.scss';

//Data
import { disquesList } from '../datas/disquesList';

//Image
import pictoButton from '../assets/pictoButton.png';
import disqueImage from '../assets/disque.webp';
import backgroundData from '../assets/backgroundData.png';
import titleDecoration from '../assets/titleDecoration.png'

//Component
import Search from '../components/Search';
import DisquesListe from '../components/DisquesListe';
import DisquesDatas from '../components/DisquesDatas';

function Disques(){
    const [disqueSelected, setDisqueSelected] = useState(null); //affichage des datas au click du picto
    const [inputValue, setInputValue] = useState("");

    const filteredDisque = disquesList.filter(p => {
        return p.nom.toLowerCase().includes(inputValue);
    })

    function selectDisque(disque){
        setDisqueSelected(disque);
        console.log(disque);
    }

    console.log(inputValue);

    return(
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
            <div className="disques__data relative">
                <img src={backgroundData} className='backgroundData' alt="" />
                <div className='disques__dataAbsolute'>
                    <DisquesDatas disqueSelected={disqueSelected} titleDecoration={titleDecoration} />
                </div>
            </div>
        </div>
    )
}

export default Disques