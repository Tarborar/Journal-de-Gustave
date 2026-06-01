import searchInput from '../assets/searchInput.svg';
import smallSearchInput from '../assets/smallSearchInput.svg';
import searchIcon from '../assets/searchIcon.svg';

import '../styles/components/Search.scss'

function Search({ setInputValue }){
    function search(e){
        setInputValue(e.target.value.toLowerCase());
    }

    return(
        <div className='relative search'>
            <input type="search" className='search__input absolute' onInput={search}/>
            <picture>
                <source media="(max-width: 1440px)" srcSet={smallSearchInput} />
                <img src={searchInput} className='search__image' alt="" />
            </picture>
            <img src={searchIcon} className='search__icon' alt="" />
        </div>
    )
}

export default Search