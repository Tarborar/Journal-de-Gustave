import '../styles/components/ArmesListe.scss';

function ArmesListe({ filteredArme, selectArme, pictoButton }){
    return(
        <div className='list'>
            {
                filteredArme.map((a) => (
                    <div className='armes__button relative' onClick={() => selectArme(a)}>
                        <img src={pictoButton} alt="" />
                        <div className='armes__buttonText absolute'>
                            <div className='horizontal armes__buttonTextInfo'>
                                <img src={a.icone} className={`armes__icon ${a.personnage !== 'Lune' ? 'rotate' : ''}`}  alt="" />
                                <div className='armes__buttonTextNom'>{a.nom}</div>
                                {/* <div className='armes__buttonTextElement'>{a.element}</div> */}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ArmesListe