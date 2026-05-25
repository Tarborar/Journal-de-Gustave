import '../styles/components/ArmesListe.scss';

//Éléments
import feu from '../assets/Feu.webp';
import physique from '../assets/Physique.webp';
import lumiere from '../assets/Lumière.webp';
import glace from '../assets/Glace.webp';
import obscur from '../assets/Obscur.webp';
import foudre from '../assets/Foudre.webp';
import terre from '../assets/Terre.webp';
import vide from '../assets/Vide.webp';


function ArmesListe({ filteredArme, selectArme, pictoButton }){

    const elementImages = {
        'Feu': feu,
        'Physique': physique,
        'Lumière': lumiere,
        'Glace': glace,
        'Obscur': obscur,
        'Foudre': foudre,
        'Terre': terre,
        'Vide': vide
    };

    return(
        <div className='list'>
            {
                filteredArme.map((a) => (
                    <div key={a.nom} className='armes__button relative' onClick={() => selectArme(a)}>
                        <img src={pictoButton} alt="" />
                        <div className='armes__buttonText absolute'>
                            <div className='horizontal armes__buttonTextInfo'>
                                <img src={a.icone} className={`armes__icon ${a.personnage !== 'Lune' ? 'rotate' : ''}`}  alt="" />
                                <div className='armes__buttonTextNom'>{a.nom}</div>
                                <div className='element'>
                                    <img src={elementImages[a.element]} className='elementImage' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ArmesListe