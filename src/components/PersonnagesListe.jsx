import gustave from '../assets/gustave.png';
import lune from '../assets/lune.png';
import maelle from '../assets/maelle.png';
import sciel from '../assets/sciel.png';
import monoco from '../assets/monoco.png';

import '../styles/components/PersonnageListe.scss';

function PersonnagesListe({ characterTag, setCharacterTag }){
    const characters = [
        {name: 'Verso', image: gustave},
        {name: 'Lune', image: lune},
        {name: 'Maelle', image: maelle},
        {name: 'Sciel', image: sciel},
        {name: 'Monoco', image: monoco}
    ];

    function selectCharacter(character){
        if(characterTag === character.name){
            setCharacterTag(null);
        }else{
            setCharacterTag(character.name);
        }
    }

    return (
        <ul className='horizontal gap'>
            {characters.map((c) => (
                <li key={c.name} className={`${characterTag === c.name ? 'characterActive' : ''} character`} onClick={() => selectCharacter(c)}><img src={c.image} alt="" /></li>
            ))}
        </ul>
    )
}

export default PersonnagesListe