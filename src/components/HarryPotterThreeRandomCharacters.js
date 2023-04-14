import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const HarryPotterThreeRandomCharacters = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://hp-api.onrender.com/api/characters").then((res) => setData(res.data))
    }, [])

    const randomData = data.sort(() => Math.random() - 0.5).slice(0, 3)

    return (
        <section>
            <h2 className='center'> Titre card random </h2>
            <div className='cardsContainer'>
                {randomData.map((character) => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
        </section>
    );
};

export default HarryPotterThreeRandomCharacters