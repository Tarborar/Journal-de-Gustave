import searchInput from '../assets/searchInput.svg';
import searchIcon from '../assets/searchIcon.svg';

import '../styles/components/Search.scss'

function Search({ setInputValuePicto }){
    function searchPicto(e){
        setInputValuePicto(e.target.value.toLowerCase());
    }

    return(
        <div className='relative search'>
            <input type="search" className='search__input absolute' onInput={searchPicto}/>
            <img src={searchInput} className='search__image' alt="" />
            <img src={searchIcon} className='search__icon' alt="" />
        </div>
    )
}

export default Search