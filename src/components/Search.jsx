import searchInput from '../assets/searchInput.svg';
import searchIcon from '../assets/searchIcon.svg';

import '../styles/components/Search.scss'

function Search(){
    return(
        <div className='relative'>
            <input type="search" className='search absolute' />
            <img src={searchInput} alt="" />
            <img src={searchIcon} className='search__icon' alt="" />
        </div>
    )
}

export default Search