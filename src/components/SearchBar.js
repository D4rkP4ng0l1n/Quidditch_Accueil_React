import React, { useEffect, useState } from 'react';

const SearchBar = ({ list, setList, filterField = character => character }) => {

    const [value, setValue] = useState("")

    useEffect(() => {
        if (value === "") {
            setList("");
            return;
        }
        setList(filterList())
    }, [value])

    const filterList = () => {
        return list.filter(character => character.name.toLowerCase().startsWith(value.toLocaleLowerCase()));
    }

    const handleChange = event => {
        setValue(event.target.value)
    }

    return (
        <div>
            <input className="searchBar" type="text" placeholder='Recherche joueur ex : Harry...' name='search' onChange={handleChange} value={value} />
        </div>
    );
};

export default SearchBar;
