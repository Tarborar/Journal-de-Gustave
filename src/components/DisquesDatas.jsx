import '../styles/components/DisquesDatas.scss';

function DisquesDatas({ disqueSelected, titleDecoration }){
    return(
        <>
            {
                disqueSelected ? (
                    <div className='disquesDatas vertical gap'>
                        <p className='cinzel mainColor'>{disqueSelected.nom}</p>
                        <p className='disques__dataEffet imEnglishItalic'>
                            {disqueSelected.pouvoir ? `Pouvoir requis : ${disqueSelected.pouvoir}` : "Aucun pouvoir requis"}
                        </p>
                        <div className='relative disques__dataMonde'>
                            <img src={titleDecoration} className='titleDecoration' alt="" />
                            <p className='cinzel mainColor absolute disques__dataMondeText'>{disqueSelected.monde}</p>
                        </div>
                        <p className='disques__dataLocalisation imEnglishItalic disques__dataMonde'>{disqueSelected.localisation}</p>
                        <iframe src={disqueSelected.url} className='disques__dataVideo' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                ) : (
                    null
                )
            }
        </>
    )
}

export default DisquesDatas