import '../styles/components/GestralsDatas.scss';

function GestralsDatas({ gestralSelected, gestral, toggleMapModal}){
    return(
        <>
            {
                gestralSelected ? (
                    <div className='gestralsDatas vertical gap'>
                        <p className='cinzel mainColor'>{gestralSelected.monde}</p>
                        <p className='gestralsDatas__localisation imEnglishItalic'>{gestralSelected.localisation}</p>
                        <div>
                            <img src={gestral} className='gestralImage' alt="" />
                        </div>
                        <div className='vertical gestralsDatas__recompenseInfo'>
                            <p className='cinzel gestralsDatas__recompenseTitle'>Récompense</p>
                            <p className='cinzel mainColor gestralsDatas__recompense'>{gestralSelected.recompense}</p>
                        </div>
                        <div className='horizontal gestralsDatas__images'>
                            <img src={`../../public//${gestralSelected.images[0]}`} className='gestralsDatas__image' alt="" onClick={() => toggleMapModal(gestralSelected.images[0])} />
                            <img src={`../../public//${gestralSelected.images[1]}`} className='gestralsDatas__image' alt="" onClick={() => toggleMapModal(gestralSelected.images[1])} />
                        </div>
                        
                    </div>
                ) : (
                    null
                )
            }
        </>
    )
}

export default GestralsDatas