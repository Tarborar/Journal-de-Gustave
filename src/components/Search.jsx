import searchInput from '../assets/searchInput.svg';
import smallSearchInput from '../assets/smallSearchInput.svg';
import searchIcon from '../assets/searchIcon.svg';
import useWindowWidth from '../hooks/useWindowWidth';

import '../styles/components/Search.scss'

function Search({ setInputValue }){
    const windowWidth = useWindowWidth();
    
    function search(e){
        setInputValue(e.target.value.toLowerCase());
    }

    return(
        <div className='relative search'>
            <input type="search" className='search__input absolute' onInput={search}/>
            {(windowWidth < 1440 && windowWidth > 1024) || windowWidth < 767 ?
                <img src={smallSearchInput} className='search__image' alt="" /> 
                :
                <img src={searchInput} className='search__image' alt="" />}
            <img src={searchIcon} className='search__icon' alt="" />
        </div>
    )
}

export default Search