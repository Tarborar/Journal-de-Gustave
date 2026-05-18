import '../styles/components/ArmesDatas.scss';

function ArmesDatas({ armeSelected }){
    return(
        <>
            {
                armeSelected ? (
                    <div className='armesDatas vertical gap'>
                        <p className='cinzel mainColor'>{armeSelected.nom}</p>
                        <p className='armes__dataEffet imEnglishItalic'>{armeSelected.localisation}</p>
                        <div className='gap horizontal'>
                            <img src={armeSelected.icone} className={`armes__dataIcone ${armeSelected.personnage !== 'Lune' ? 'rotate' : ''}`}  alt="" />
                            <div className="horizontal gap">
                                <div className="armes__echelle vertical">
                                    <p className='cinzel'>{armeSelected.echelle[0]}</p>
                                    <p className='armes__echelleRank cinzel mainColor'>S</p>
                                </div>
                                <div className="armes__echelle vertical">
                                    <p className='cinzel'>{armeSelected.echelle[1]}</p>
                                    <p className='armes__echelleRank cinzel mainColor'>A</p>
                                </div>
                            </div>
                        </div>
                        <div className='vertical armes__effets'>
                            <div className='horizontal armes__effetText'>
                                <div className='vertical armes__niveauUn'>
                                    <p className='armes__niveau imEnglish'>Niveau</p>
                                    <p className='armes__niveauNombre bebasNueue'>4</p>
                                </div>
                                <p className='armes__effet imEnglish'>{armeSelected.effet[0]}</p>
                            </div>
                            <div className='horizontal armes__effetText'>
                                <div className='vertical armes__niveauDeux'>
                                    <p className='armes__niveau imEnglish'>Niveau</p>
                                    <p className='armes__niveauNombre bebasNueue'>10</p>
                                </div>
                                <p className='armes__effet imEnglish'>{armeSelected.effet[0]}</p>
                            </div>
                            <div className='horizontal armes__effetText'>
                                <div className='vertical armes__niveauTrois'>
                                    <p className='armes__niveau imEnglish'>Niveau</p>
                                    <p className='armes__niveauNombre bebasNueue'>20</p>
                                </div>
                                <p className='armes__effet imEnglish'>{armeSelected.effet[0]}</p>
                            </div>
                        </div>
                        
                    </div>
                ) : (
                    null
                )
            }
        </>
    )
}

export default ArmesDatas