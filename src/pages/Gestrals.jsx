//Hook
import { useState } from 'react';
import useWindowWidth from '../hooks/useWindowWidth';

//Scss
import '../styles/pages/Gestrals.scss';

//Data
import { gestralsList } from '../datas/gestralsList';

//Image
import gestralButton from '../assets/pictoButton.png';
import backgroundData from '../assets/backgroundData.png';
import gestral from '../assets/gestral.png';
import closeModal from '../assets/fermetureModale.svg';

//Component
import GestralsDatas from '../components/GestralsDatas';
import MapModal from '../components/MapModal';
import HeaderTablet from '../components/HeaderTablet';

function Gestrals(){
    const [gestralSelected, setGestralSelected] = useState(null); //affichage des datas au click du picto
    const [mapModal, setMapModal] = useState(false);
    const [imageModal, setImageModal] = useState(null);
    const [modalIsActive, setModalIsActive] = useState(false);
    const [isGestralOpen, setIsGestralOpen] = useState(false);

    const windowWidth = useWindowWidth();
    const isTablet = windowWidth < 1024;

    const toggleMapModal = (i) =>{
        setMapModal(!mapModal);
        setImageModal(i);
        setModalIsActive(!modalIsActive);
    };

    function selectGestral(gestral){
        setGestralSelected(gestral);
        setIsGestralOpen(true);
        console.log(gestral);
    }

    return(
        <div>
            {isTablet ? <HeaderTablet /> : null}
            {mapModal && <MapModal toggleMapModal={toggleMapModal} imageModal={imageModal} modalIsActive={modalIsActive} />}
            <div className="gestrals horizontal">
                {isTablet && isGestralOpen ? (
                    <div className="gestrals__data relative">
                        <img src={backgroundData} className='backgroundData' alt="" />
                        <img src={closeModal} className='closeModal' onClick={() => setIsGestralOpen(false)} alt="" />
                        <div className='gestrals__dataAbsolute'>
                            <GestralsDatas gestralSelected={gestralSelected} gestral={gestral} toggleMapModal={toggleMapModal} />
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="gestrals__select vertical">
                            <p className='gestrals__paragraph'>Retrouvez tous les Gestrals perdus</p>
                            <div className='gestrals__list'>
                                {
                                    gestralsList.map((g) => (
                                        <div className='gestrals__button relative' onClick={() => selectGestral(g)}>
                                            <img src={gestralButton} className='gestralButton' alt="" />
                                            <div className='gestral__buttonText absolute horizontal'>
                                                <img src={gestral} className='gestralImage' alt="" />
                                                <div className='horizontal gestrals__buttonTextInfo'>
                                                    <div className='gestrals__buttonTextNom'>Gestral perdu</div>
                                                </div>
                                                <div className="gestrals__buttonTextNumero">{g.numero}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {isTablet ? null : (
                            <div className="gestrals__data relative">
                                <img src={backgroundData} className='backgroundData' alt="" />
                                <div className='gestrals__dataAbsolute'>
                                    <GestralsDatas gestralSelected={gestralSelected} gestral={gestral} toggleMapModal={toggleMapModal} />
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default Gestrals