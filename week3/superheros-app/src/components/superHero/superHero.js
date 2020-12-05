  
import React from 'react';
import './superhero.css';


function SuperHero(props) {

    return (
        <div>
            <h1 onClick={props.handleClick}>{props.item.name}</h1>
            <img onClick={props.handleClick} src={props.item.imageName} alt="images" />
        </div>
    )
}

export default SuperHero