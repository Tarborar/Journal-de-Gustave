import '../styles/components/PictosDatas.scss';

function PictosDatas({ pictoSelected }){
    return(
        <>
            {
                pictoSelected ? (
                    <div className='pictosDatas vertical gap'>
                        <p className='cinzel mainColor'>{pictoSelected.nom}</p>
                        <p className='pictos__dataEffet imEnglishItalic'>{pictoSelected.effet}</p>
                        <div className='pictos__dataStatistiques'>
                            <p className='cinzel mainColor'>{pictoSelected.statistiques[0]}</p>
                            <p className='cinzel mainColor'>{pictoSelected.statistiques[1]}</p>
                        </div>
                        <div>
                            <img src={pictoSelected.icone} alt="" />
                        </div>
                        <div className='pictos__dataMonde'>
                            <p className='cinzel'>{pictoSelected.monde}</p>
                            <p className='cinzel mainColor pictos__dataRepos'>{pictoSelected.repos}</p>
                        </div>
                        <p className='pictos__dataLocalisation imEnglishItalic'>{pictoSelected.localisation}</p>
                    </div>
                ) : (
                    null
                )
            }
        </>
    )
}

export default PictosDatas