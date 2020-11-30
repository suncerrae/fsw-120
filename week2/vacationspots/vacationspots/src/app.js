import React from 'react';
import './app.css';
import vacaSpots from './locations/vacaSpots'
import Spot from './locations/spot'
import Header from './locations/header'

function App() {
  
    const vacationComps = vacaSpots.map(spot => <Spot key={spot.id} place={spot.place} price={spot.price} timeToGo={spot.timeToGo} />)
    
    return (
        <div>
        <Header /> 
        {vacationComps}
        </div>
    )
}

export default App