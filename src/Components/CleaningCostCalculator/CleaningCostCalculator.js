import React, { useState } from 'react';
import './CleaningCostCalculator.css';

const CleaningCostCalculator = () => {
  const [squareFootage, setSquareFootage] = useState('');
  const [cleaningType, setCleaningType] = useState('standard');
  const [windowCleaning, setWindowCleaning] = useState(false);
  const [carpetCleaning, setCarpetCleaning] = useState(false);
  const [frequency, setFrequency] = useState('one-time');
  const [totalCost, setTotalCost] = useState(null);

  const baseRates = {
    standard: 0.1,
    moveIn: 0.25,
  };

  const additionalServicesCost = {
    windowCleaning: 50,
    carpetCleaning: 75,
  };

  const frequencyDiscounts = {
    'one-time': 1,
    weekly: 0.9,    // 10% discount
    'bi-weekly': 0.95,  // 5% discount
    monthly: 1.0,   // No discount
  };

  const calculateCost = () => {
    let cost = parseFloat(squareFootage) * baseRates[cleaningType];

    if (windowCleaning) cost += additionalServicesCost.windowCleaning;
    if (carpetCleaning) cost += additionalServicesCost.carpetCleaning;

    // Apply frequency discount
    cost *= frequencyDiscounts[frequency];

    setTotalCost(cost.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <h1>Cleaning Cost Calculator</h1>
      <div className="input-group">
        <label>
          Square Footage:
          <input
            type="number"
            value={squareFootage}
            onChange={(e) => setSquareFootage(e.target.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Cleaning Type:
          <select
            value={cleaningType}
            onChange={(e) => setCleaningType(e.target.value)}
          >
            <option value="standard">Standard Cleaning</option>
            <option value="moveIn">Move-In Cleaning</option>
          </select>
        </label>
      </div>
      <div className="input-group">
        <label>
          Frequency:
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option value="one-time">One-Time</option>
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>
      </div>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={windowCleaning}
            onChange={(e) => setWindowCleaning(e.target.checked)}
          />
          Windows Cleaning ($50)
        </label>
      </div>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={carpetCleaning}
            onChange={(e) => setCarpetCleaning(e.target.checked)}
          />
          Carpets Cleaning ($75)
        </label>
      </div>
      <button className="calculate-button" onClick={calculateCost}>
        Calculate
      </button>
      {totalCost !== null && (
        <div className="total-cost">
          <h3>Total Cleaning Cost: ${totalCost}</h3>
        </div>
      )}
    </div>
  );
};

export default CleaningCostCalculator;
