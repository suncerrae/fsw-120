import React from 'react';
import './spot.css';

function Spot(props) {

    //I attemped the Extra Credit for the dollar signs, however it only shows up the props.price only and the correct amount of dollar signs.
    // if (props.price < 500) {
    //    return `$${props.price}`
    // }
    // if (props.price < 1000) {
    //     return `$$${props.price}`
    // }
    // 
    // }
    return (
            <div className="vacaSpotContainer">
            <h3>DESTINATION: {props.place}</h3>
            <h3>PRICE: {props.price}</h3>
            <h3 >BEST TIME TO GO: {props.timeToGo}</h3>
        </div>
    )
}

export default Spot