import React from 'react';
import NavigationHeader from '../components/NavigationHeader';
import MainContent from '../components/MainContent';
import LogoAnime from '../components/LogoAnime';
import NavigationFooter from '../components/NavigationFooter';
import Copyright from '../components/Copyright';
import HarryPotterTopSixCharacters from '../components/HarryPotterTopSixCharacters';
import HarryPotterThreeRandomCharacters from '../components/HarryPotterThreeRandomCharacters';
import DynamicListHarryPotterCharactersName from '../components/DynamicListHarryPotterCharactersName';

const Home = () => {
    return (
        <div className='App'>
            <NavigationHeader />
            <main>
                <MainContent />
                <HarryPotterTopSixCharacters />
                <HarryPotterThreeRandomCharacters />
                <DynamicListHarryPotterCharactersName />
                <LogoAnime />
            </main>
            <footer>
                <NavigationFooter />
                <Copyright />
            </footer>
        </div>

    );
};

export default Home;