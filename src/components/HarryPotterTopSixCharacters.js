import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const HarryPotterTopSixCharacters = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://hp-api.onrender.com/api/characters").then((res) => setData(res.data))
    }, [])

    const firstThreeCharacters = data.slice(0, 3)
    const threeToSixCharacters = data.slice(3, 6)

    return (
        <section>
            <h2 className='center'> Card top 6 API </h2>
            <div className='cardsContainer'>
                {firstThreeCharacters.map((character) => (
                    <Card key={character.id} character={character} />
                ))}
                {threeToSixCharacters.map((character) => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
        </section>
    );
};

export default HarryPotterTopSixCharacters