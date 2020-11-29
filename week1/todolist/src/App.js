import React from 'react';
import './App.css'

function App() {
    
  return (

    <div className="list">

        <h1 className="title">To-Do List</h1>

        <h2>Laundry</h2>
        <p>- Wash, Dry, Iron, Fold</p>
        <input type="checkbox" />
        <input type="button" value="Delete" />

            
        <h2>Grocery Store</h2>
        <p>- Apples, Lettuce, water, Chicken</p>
        <input type="checkbox" />
        <input type="button" value="Delete" />

        <h2>Mall</h2>
        <p>- Steam mop, Dog Life jackets, Boat seats</p>
        <input type="checkbox" />
        <input type="button" value="Delete" />
    </div>
  );
}

export default App;