import React, { useState } from 'react';

     const CleaningCostCalculator = () => {
       const [squareFootage, setSquareFootage] = useState('');
       const [ratePerSquareFoot, setRatePerSquareFoot] = useState('');
       const [totalCost, setTotalCost] = useState(null);

       const calculateCost = () => {
         const cost = parseFloat(squareFootage) * parseFloat(ratePerSquareFoot);
         setTotalCost(cost.toFixed(2));
       };

       return (
         <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
           <h1>Cleaning Cost Calculator</h1>
           <div style={{ marginBottom: '10px' }}>
             <label>
               Square Footage:
               <input
                 type="number"
                 value={squareFootage}
                 onChange={(e) => setSquareFootage(e.target.value)}
                 style={{ marginLeft: '10px', padding: '5px' }}
               />
             </label>
           </div>
           <div style={{ marginBottom: '10px' }}>
             <label>
               Rate per Square Foot:
               <input
                 type="number"
                 value={ratePerSquareFoot}
                 onChange={(e) => setRatePerSquareFoot(e.target.value)}
                 style={{ marginLeft: '10px', padding: '5px' }}
               />
             </label>
           </div>
           <button onClick={calculateCost} style={{ padding: '10px 20px', cursor: 'pointer' }}>
             Calculate
           </button>
           {totalCost !== null && (
             <div style={{ marginTop: '20px' }}>
               <h2>Total Cleaning Cost: ${totalCost}</h2>
             </div>
           )}
         </div>
       );
     };

     export default CleaningCostCalculator;