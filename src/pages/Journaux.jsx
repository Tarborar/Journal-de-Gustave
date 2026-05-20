//Hook
import { useState } from 'react';

//Scss
import '../styles/pages/Journaux.scss';

//Data
import { journauxList } from '../datas/journauxList';

//Image
import backgroundJournal from '../assets/backgroundData.png'; 
import journalButton from '../assets/journalButton2.svg';
import horizontalLine from '../assets/ligneHorizontale.png';
import verticalLine from '../assets/ligneVerticale.png';
import cursor from '../assets/curseur.png';



function Journaux(){
    const [journalSelected, setJournalSelected] = useState(null);

    function selectJournal(journal){
        setJournalSelected(journal);
        console.log(journal);
    }

    return(
        <div className='horizontal'>
            <div className='vertical'>
                <p className='journal__paragraph'>Complétez tous les journaux</p>
                <div className='relative'>
                    <img src={backgroundJournal} className='backgroundJournal' alt="" />
                    <div className='journaux__select absolute'>
                        {journauxList.map((j) => (
                            <div className='relative' onClick={() => selectJournal(j)}>
                                <img src={journalButton} className='journalButton' alt="" />
                                <div className={`journaux__carre bebasNueue mainColor ${j.nom ? 'journaux__carreName' : ''}`}>{j.numero}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='journal__data horizontal'>
                <div>
                    <img src={verticalLine} className='verticalLine' alt="" />
                </div>
                <div className='journal__content'>
                    {
                        journalSelected ? (
                            <div className='vertical gap'>
                                <p className='cinzel journal__numero mainColor'>
                                    {journalSelected.nom ? `Journal - ${journalSelected.numero}` : `Journal - Expédition ${journalSelected.numero}`}
                                </p>
                                <p className='imEnglish journal__contenu'>{journalSelected.contenu}</p>
                            </div>
                        ) : (
                            null
                        )
                    }
                </div>
                <div className='journal__obtention gap'>
                    <div>
                        <img src={cursor} className='cursor' alt="" />
                    </div>
                    {
                        journalSelected ? (
                            <div className='vertical journal__obtentionInfo'>
                                <p className='cinzel journal__monde mainColor'>{journalSelected.monde}</p>
                                <p className='imEnglish journal__localisation imEnglishItalic'>{journalSelected.localisation}</p>
                            </div>
                        ) : (
                            null
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Journaux