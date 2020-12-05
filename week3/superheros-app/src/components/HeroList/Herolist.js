
import React from 'react';
import data from '../data/data.json'
import SuperHero from "../superHero/superHero"

class HeroList extends React.Component {
    constructor() {
        super()
        this.state = {
            heros: data
        }
    }

    render () {
        
        const heroList = this.state.heros.map(item => <SuperHero key={item.id} item={item} handleClick={() => { return (alert(item.catchPhrase))}}/>)

        return (
            <div>
            {heroList}
            </div>
        )
    }
}

export default HeroList