import React from 'react';

function SearchBar(props) {
    const { searchQuery, setSearchQuery } = props;
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <input
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={handleInputChange}
            className='search-bar'
        />
    );
}

export default SearchBar;