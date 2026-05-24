import '../styles/components/DisquesListe.scss';

function DisquesListe({ filteredDisque, selectDisque, pictoButton, disqueImage}){
    return(
        <div className='list'>
            {
                filteredDisque.map((p) => (
                    <div className='disques__button relative' onClick={() => selectDisque(p)}>
                        <img src={pictoButton} alt="" />
                        <div className='disques__buttonText absolute horizontal'>
                            <img src={disqueImage} className='disques__buttonSquare' alt="" />
                            <div className='horizontal disques__buttonTextInfo'>
                                <div className='disques__buttonTextNom'>{p.nom}</div>
                                <div className='disques__buttonTextPoint'>{p.points}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisquesListe