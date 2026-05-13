function PictosListe({ pictosList, selectPicto, pictoButton, pictoIconButton}){
    return(
        <div className='list'>
            {
                pictosList.map((p) => (
                    <div className='pictos__button relative' onClick={() => selectPicto(p)}>
                        <img src={pictoButton} alt="" />
                        <div className='pictos__buttonText absolute horizontal'>
                            <div className='relative'>
                                <img src={pictoIconButton} className='pictos__buttonSquare' alt="" />
                                <img src={p.icone} className='pictos__icon absolute' alt="" />
                            </div>
                            <div className='horizontal pictos__buttonTextInfo'>
                                <div className='pictos__buttonTextNom'>{p.nom}</div>
                                <div className='pictos__buttonTextPoint'>{p.points}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PictosListe