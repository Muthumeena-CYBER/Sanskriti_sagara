import React, { useEffect } from 'react';
import './states.css';
const statesData = [
        { state: "Himachal Pradesh", capital: "Shimla" },
    { state: "Kerala", capital: "Thiruvananthapuram" },
    { state: "Madhya Pradesh", capital: "Bhopal" },
    { state: "Maharashtra", capital: "Mumbai" },
    { state: "Punjab", capital: "Chandigarh" },
    { state: "Rajasthan", capital: "Jaipur" },
    { state: "Tamil Nadu", capital: "Chennai" },
    { state: "Telangana", capital: "Hyderabad" },
    { state: "Uttar Pradesh", capital: "Lucknow" },
     { state: "Uttarakhand", capital: "Dehradun" },
    { state: "West Bengal", capital: "Kolkata" }
];

const StateCards = () => {
    useEffect(() => {
        createStateCards();
    }, []);

    const createStateCards = () => {
        const container = document.getElementById('statesContainer');

        statesData.forEach(data => {
            const card = document.createElement('div');
            card.className = 'state-card';
            card.innerHTML = `
                <div class="state-name">${data.state}</div>
                <div class="capital">Capital: ${data.capital}</div>
            `;

            // Add click event to toggle capital visibility
            card.addEventListener('click', () => {
                card.classList.toggle('show-capital');
            });

            container.appendChild(card);
        });
    };

    return <div id="statesContainer" />;
};

export default StateCards;
// import React from 'react';
// import './states.css';

// const statesData = [
//     { state: "Himachal Pradesh", capital: "Shimla" },
//     { state: "Kerala", capital: "Thiruvananthapuram" },
//     { state: "Madhya Pradesh", capital: "Bhopal" },
//     { state: "Maharashtra", capital: "Mumbai" }
// ];

// const StateCards = () => {
//     return (
//         <div>
//             <h1>Indian States and Capitals</h1>
//             <div className="states-container" id="statesContainer">
//                 {statesData.map((data, index) => (
//                     <div key={index} className="state-card">
//                         <div className="state-name">{data.state}</div>
//                         <div className="capital">{data.capital}</div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default StateCards;

