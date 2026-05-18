import '../styles/components/ArmesTags.scss';

function ArmesTags({ armeButton, dropdownArrow }){
    return(
        <ul className='horizontal'>
            <li className='relative'>
                <img src={armeButton} alt=""/>
                <div className='horizontal tag__info absolute'>
                    <p className='tag__text cinzel'>Élément</p>
                    <img src={dropdownArrow} className='tag__arrow' alt="" />
                </div>
            </li>
            <li className='relative'>
                <img src={armeButton} alt=""/>
                <div className='horizontal tag__info absolute'>
                    <p className='tag__text cinzel'>Attribut S</p>
                    <img src={dropdownArrow} className='tag__arrow' alt="" />
                </div>
            </li>
            <li className='relative'>
                <img src={armeButton} alt=""/>
                <div className='horizontal tag__info absolute'>
                    <p className='tag__text cinzel'>Attribut A</p>
                    <img src={dropdownArrow} className='tag__arrow' alt="" />
                </div>
            </li>
        </ul>
    )
}

export default ArmesTags