import React from 'react';
// import './searchBar.css';

const SearchBar = (props) => {
    return(
        <input type='search'
        className='search'
        placeholder= {props.placeholder}
        onChang= {props.handleChange}
        />
    )
}

export default SearchBar;