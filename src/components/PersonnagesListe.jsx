import gustave from '../assets/gustave.png';
import lune from '../assets/lune.png';
import maelle from '../assets/maelle.png';
import sciel from '../assets/sciel.png';
import monoco from '../assets/monoco.png';

function PersonnagesListe(){
    return (
        <ul className='horizontal gap'>
            <li><img src={gustave} alt="" /></li>
            <li><img src={lune} alt="" /></li>
            <li><img src={maelle} alt="" /></li>
            <li><img src={sciel} alt="" /></li>
            <li><img src={monoco} alt="" /></li>
        </ul>
    )
}

export default PersonnagesListe