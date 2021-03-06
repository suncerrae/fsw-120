import React from 'react';
import './services.css';

function Services() {

  return (
      <div className="main-container">
    <div>
        <h1 className="services-title">Our Services</h1>
        <img src="https://media.istockphoto.com/photos/young-man-fixing-a-leak-under-the-bathroom-sink-picture-id1146120013?k=6&m=1146120013&s=612x612&w=0&h=NbTRJgT31dTZVMN0KfRFU7Fr8PPeNiAbJNqf3XoZHrs=" className="service-image" alt="tools"/>
    </div>
    <div>
        <h2 className="services">Installation, Repair or Replacement:</h2>
        <ul className="services-list">
            <li>Kitchen Sinks</li>
            <li>Bathroom Sinks</li>
            <li>Toliets</li>
            <li>Power Flush Toliets</li>
            <li>Tubs</li>
            <li>Showers</li>
            <li>Water Heaters</li>
            <li>Gas Lines</li>
            <li>Washers</li>
            <li>Drain Pipes</li>
            <li>Water Lines</li>
            <li>Garbage Disposal</li>
            <li>Sump Pump</li>
            <li>Septic Systems</li>
        </ul>
        <h2 className="services">Drain Cleaning and Sewers:</h2>
        <ul className="services-list">
            <li>Main Line</li>
            <li>Toliets</li>
            <li>Drain/Sewer Line</li>
            <li>Floor Drains</li>
            <li>Grease Traps</li>
            <li>Pipe Repair</li>
            <li>Septic Tanks</li>
            <li>Clear Lines</li>
        </ul>
        <h2 className="services">Maintenace, Repair and Care:</h2>
        <ul className="services-list">
            <li>Drain and Sewer Cleaning</li>
            <li>Update to Code</li>
            <li>Pipe Repair and Replacement</li>
            <li>Trap Cleaning and/or Removal</li>
            <li>Low Water Pressure Diagnostics and Repair</li>
        </ul>
    </div>
    </div>
  );
}

export default Services;