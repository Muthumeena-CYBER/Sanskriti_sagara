// import React from 'react';
// import './dash.css';

// const categories = [
//   {
//     title: 'Languages',
//     bgColor: 'bg-yellow',
//     iconClass: 'fas fa-language text-4xl text-yellow-600 mb-2',
//     items: ['Letters', 'Colours', 'Rhymes', 'Words', 'Story', 'Phrases'],
//   },
//   {
//     title: 'General',
//     bgColor: 'bg-red',
//     iconClass: 'fas fa-globe text-4xl text-red-600 mb-2',
//     items: ['Festivals', 'Good and Bad Habits', 'States', 'Indian Culture'],
//   },
//   {
//     title: 'Progress Tracker',
//     bgColor: 'bg-blue',
//     iconClass: 'fas fa-trophy text-4xl text-blue-600 mb-2',
//     items: ['User Profile', 'Achievement Badges'],
//   },
// ];

// const Dashboard = ({ onColorButtonClick, onLettersButtonClick }) => {
//   return (
//     <div className="dashboard">
//       <div className="content-inner">
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
//           <p className="text-secondary">Welcome to Sanskriti Sagara</p>
//         </div>
//         <div className="flex-container">
//           {categories.map((category) => (
//             <div key={category.title} className={`${category.bgColor} category-card`}>
//               <i className={category.iconClass}></i>
//               <h2 className="text-xl font-bold">{category.title}</h2>
//               <ul>
//                 {category.items.map((item) => (
//                   <li key={item}>
//                     <button
//                       className="btn"
//                       onClick={item === 'Colours' ? onColorButtonClick : item === 'Letters' ? onLettersButtonClick : undefined}
//                     >
//                       {item}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// const Dashboard = ({ onColorButtonClick, onLettersButtonClick, onStatesButtonClick }) => {
//   return (
//     <div className="dashboard-container">
//       <button className="dashboard-btn" onClick={onColorButtonClick}>Colors</button>
//       <button className="dashboard-btn" onClick={onLettersButtonClick}>Letters</button>
//       <button className="dashboard-btn" onClick={onStatesButtonClick}>States</button> {/* Add States button */}
//     </div>
//   );
// };
//export default Dashboard;
// import React from 'react';

// const Dashboard = ({ onColorButtonClick, onLettersButtonClick, onStatesButtonClick }) => {
//   return (
//     <div>
//       <button onClick={onColorButtonClick}>Colors</button>
//       <button onClick={onLettersButtonClick}>Letters</button>
//       <button onClick={onStatesButtonClick}>States</button> {/* Add States button */}
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react';
import './dash.css';

const categories = [
  {
    title: 'Languages',
    bgColor: 'bg-yellow',
    iconClass: 'fas fa-language text-4xl text-yellow-600 mb-2',
    items: ['Letters', 'Colours', 'Rhymes', 'Words']
  },
  {
    title: 'General',
    bgColor: 'bg-red',
    iconClass: 'fas fa-globe text-4xl text-red-600 mb-2',
    items: ['Festivals', 'Good and Bad Habits', 'States', 'Indian Culture'],
  },
  {
    title: 'Progress Tracker',
    bgColor: 'bg-blue',
    iconClass: 'fas fa-trophy text-4xl text-blue-600 mb-2',
    items: ['User Profile', 'Achievement Badges'],
  },
];

const Dashboard = ({ onColorButtonClick, onLettersButtonClick, onStatesButtonClick }) => {
  return (
    <div className="dashboard">
      {categories.map((category, index) => (
        <div key={index} className={`category ${category.bgColor}`}>
          <div className="icon">
            <i className={category.iconClass}></i>
          </div>
          <h2>{category.title}</h2>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>
                <button
                  className="dashboard-btn"
                  onClick={
                    item === 'Colours'
                      ? onColorButtonClick
                      : item === 'Letters'
                      ? onLettersButtonClick
                      : item === 'States'
                      ? onStatesButtonClick
                      : null
                  }
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;