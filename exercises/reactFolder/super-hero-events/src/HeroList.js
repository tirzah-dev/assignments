import React from 'react'
import SuperHero from './SuperHero'
import data from './data.json'

    const HeroList = () => {
        const speak = hero => 
        alert (`${hero.catchphrase}`);
    

    const heroObj = data.map(heroObj => 
        <SuperHero key={heroObj.img} 
            hero = {heroObj} 
            handleClick={speak}/>
        )

        return (
            <div>
                {heroObj}
                </div>
        )
};
export default HeroList;

        
    

