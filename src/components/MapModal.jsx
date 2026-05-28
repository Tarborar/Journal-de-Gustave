import '../styles/components/MapModal.scss';
import cadreModale from '../assets/cadreModale.svg';
import fermetureModale from '../assets/fermetureModale.svg';

function MapModal({ imageModal, toggleMapModal, modalIsActive }){
    return(
        <div>
            <div className={`mapModal relative ${modalIsActive ? 'modalOverlay' : ''}`} onClick={toggleMapModal}></div>
            <div className={'mapModal relative'}>
                <img src={imageModal} className='imageModal' alt="" />
                <img src={cadreModale} className='absolute cadreModale' alt="" />
                <img src={fermetureModale} className='fermetureModale' onClick={toggleMapModal} alt="" />
            </div>
        </div>
        
    )
}

export default MapModal