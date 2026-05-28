import { useState } from 'react';
import '../styles/components/ArmesTags.scss';

function ArmesTags({ armeButton, dropdownArrow, elementSelected, setElementSelected, rankSSelected, setRankSSelected, rankASelected, setRankASelected }){
    //Ouverture Dropdown
    const [elementDropdown, setElementDropdown] = useState(false);
    const [rankSDropdown, setRankSDropdown] = useState(false);
    const [rankADropdown, setRankADropdown] = useState(false);

    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const elementDropdownList = ['Feu', 'Glace', 'Foudre', 'Terre', 'Physique', 'Lumière', 'Obscur', 'Vide'];
    const rankDropdownList = ['Vitalité', 'Force', 'Agilité', 'Défense', 'Chance'];

    const toggleDropdown = () =>{
        setElementDropdown(false);
        setRankSDropdown(false);
        setRankADropdown(false);
        setIsDropdownActive(!isDropdownActive);
    }

    const toggleElementDropdown = () =>{
        setElementDropdown(!elementDropdown);
        setRankSDropdown(false);
        setRankADropdown(false);
        setIsDropdownActive(!isDropdownActive);
    };

    const toggleRankSDropdown = () =>{
        setElementDropdown(false);
        setRankSDropdown(!rankSDropdown);
        setRankADropdown(false);
        setIsDropdownActive(!isDropdownActive);
    };

    const toggleRankADropdown = () =>{
        setElementDropdown(false);
        setRankSDropdown(false);
        setRankADropdown(!rankADropdown);
        setIsDropdownActive(!isDropdownActive);
    };

    function getElementName(name){
        console.log(name);
        setElementSelected(name);
        toggleElementDropdown();
    }

    function getRankSName(name){
        console.log(name);
        setRankSSelected(name);
        toggleRankSDropdown();
    }

    function getRankAName(name){
        console.log(name);
        setRankASelected(name);
        toggleRankADropdown();
    }

    function defaultValue(type){
        switch(type){
            case 'element':
                setElementSelected('Élément');
                toggleElementDropdown();
                break;
            case 'rankS':
                setRankSSelected('Attribut S');
                toggleRankSDropdown();
                break;
            case 'rankA':
                setRankASelected('Attribut A');
                toggleRankADropdown();
                break;
        }
    }

    return(
        <div>
            <div className={`${isDropdownActive ? 'dropdownOverlay' : ''}`} onClick={toggleDropdown}></div>
            <ul className='horizontal armesTags'>
                <li className='relative'>
                    <div onClick={toggleElementDropdown}>
                        <img src={armeButton} alt=""/>
                        <div className='horizontal tag__info absolute'>
                            <p className='tag__text cinzel'>{elementSelected}</p>
                            <img src={dropdownArrow} className='tag__arrow' alt="" />
                        </div>
                    </div>
                    {elementDropdown && (
                        <ul className='tag__dropdown vertical'>
                            <li className='tag__dropdownText cinzel' onClick={() => defaultValue('element')}>Tous les éléments</li>
                            {elementDropdownList.map((e) => (
                                <li className='tag__dropdownText cinzel' onClick={() => getElementName(e)}>{e}</li>
                            ))}
                        </ul>
                    )}
                </li>
                <li className='relative'>
                    <div onClick={toggleRankSDropdown}>
                        <img src={armeButton} alt=""/>
                        <div className='horizontal tag__info absolute'>
                            <p className='tag__text cinzel'>{rankSSelected}</p>
                            <img src={dropdownArrow} className='tag__arrow' alt="" />
                        </div>
                    </div>
                    {rankSDropdown && (
                    <ul className='tag__dropdown vertical'>
                        <li className='tag__dropdownText cinzel' onClick={() => defaultValue('rankS')}>Tous les attributs</li>
                        {rankDropdownList.map((r) => (
                            <li className='tag__dropdownText cinzel' onClick={() => getRankSName(r)}>{r}</li>
                        ))}
                    </ul>
                    )}
                </li>
                <li className='relative'>
                    <div onClick={toggleRankADropdown}>
                        <img src={armeButton} alt=""/>
                        <div className='horizontal tag__info absolute'>
                            <p className='tag__text cinzel'>{rankASelected}</p>
                            <img src={dropdownArrow} className='tag__arrow' alt="" />
                        </div>
                    </div>
                    {rankADropdown && (
                    <ul className='tag__dropdown vertical'>
                        <li className='tag__dropdownText cinzel' onClick={() => defaultValue('rankA')}>Tous les attributss</li>
                        {rankDropdownList.map((r) => (
                            <li className='tag__dropdownText cinzel' onClick={() => getRankAName(r)}>{r}</li>
                        ))}
                    </ul>
                    )}
                </li>
            </ul>
        </div>
        
    )
}

export default ArmesTags