import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

const DynamicListHarryPotterCharactersName = () => {

    const [originalData, setOriginalData] = useState([])
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        axios.get("https://hp-api.onrender.com/api/characters").then((res) => {
            setOriginalData(res.data)
            setData(res.data.slice())
        })
    }, [])

    const handleChange = (event) => {
        setSearchValue(event.target.value)
        if (event.target.value === "") {
            setData(originalData.slice())
        }
    }

    return (
        <section>
            <SearchBar placeholder={"filter by name"} filterField={(character) => character.name} list={originalData} setList={setData} onChange={handleChange} />
            {data.length !== originalData.length ? (
                data.length > 0 ? (
                    data.map((character) => <p className='harryPotterNames' key={character.id}> {character.name} </p>)
                ) : (
                    <p> Pas de joueur </p>
                )
            ) :
                <p> </p>
            }
        </section >
    );
};

export default DynamicListHarryPotterCharactersName;