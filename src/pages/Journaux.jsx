import '../styles/pages/Journaux.scss';
import backgroundJournal from '../assets/backgroundData.png'; 
import { journauxList } from '../datas/journauxList';
import journalButton from '../assets/journalButton2.svg';

function Journaux(){
    return(
        <div className='horizontal'>
            <div className='vertical'>
                <p className='journal__paragraph'>Complétez tous les journaux</p>
                <div className='relative'>
                    <img src={backgroundJournal} className='backgroundJournal' alt="" />
                    <div className='journaux__select absolute'>
                        {journauxList.map((j) => (
                            <div className='relative'>
                                <img src={journalButton} className='journalButton' alt="" />
                                <div className='journaux__carre bebasNueue mainColor'>{j.numero}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default Journaux