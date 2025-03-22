// import React from "react";
// import "./LearnColorsTelugu.css";

// const colors = [
//   {
//     name: "ఎరుపు",
//     english: "Red",
//     className: "bg-red",
//     image:
//       "https://storage.googleapis.com/a1aa/image/jx65oehFDgx5L6OuflCOADwfOS6iVEY5ef880KaL7pp8zW9gC.jpg",
//   },
//   {
//     name: "నీలం",
//     english: "Blue",
//     className: "bg-blue",
//     image:
//       "https://storage.googleapis.com/a1aa/image/dOlEErxYuzZgJNoikQsYEfXnObNNqXogb1CiIjbgSWdPb1DKA.jpg",
//   },
//   {
//     name: "ఆకుపచ్చ",
//     english: "Green",
//     className: "bg-green",
//     image:
//       "https://storage.googleapis.com/a1aa/image/bR52gdeSsesR40W1WSuLZi85NGEDPwDh8ofxX4jSVzeBaregC.jpg",
//   },
//   {
//     name: "పసుపు",
//     english: "Yellow",
//     className: "bg-yellow",
//     image:
//       "https://storage.googleapis.com/a1aa/image/unps43rCeZ0meEBvMJcM24SIks23tO3reYNrffxAKHUjzW9gC.jpg",
//   },
//   {
//     name: "ఉదా",
//     english: "Purple",
//     className: "bg-purple",
//     image:
//       "https://storage.googleapis.com/a1aa/image/65k3vJXMVyYhKVyx9NcCv30SPOLvPiwHpM7JfTWRNoYNb1DKA.jpg",
//   },
//   {
//     name: "నారింజ",
//     english: "Orange",
//     className: "bg-orange",
//     image:
//       "https://storage.googleapis.com/a1aa/image/Ln4tHe1zXQ3QZCgHQpmmLmyZFXQSsyzM4cC1fHpzevesZregC.jpg",
//   },
// ];

// const LearnColorsTelugu = () => {
//   return (
//     <div className="app-container">
//       <h1 className="title">Learn Colors in Telugu</h1>
//       <div className="grid-container">
//         {colors.map((color, index) => (
//           <div key={index} className={`color-tile ${color.className}`}>
//             <div className="text-container">
//               <p className="telugu-name">{color.name}</p>
//               <p className="english-name">{color.english}</p>
//             </div>
//             <img
//               src={color.image}
//               alt={`Cartoon character wearing ${color.english} dress`}
//               className="character-image"
//             />
//             <span className="volume-icon">
//               <i className="fas fa-volume-up"></i>
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LearnColorsTelugu;
import React, { useState } from "react";
import "./LearnColorsTelugu.css";

const colors = [
  {
    name: "சிவப்பு",
    english: "Red",
    className: "bg-red",
    image:
      "https://storage.googleapis.com/a1aa/image/jx65oehFDgx5L6OuflCOADwfOS6iVEY5ef880KaL7pp8zW9gC.jpg",
  },
  {
    name: "நீலம்",
    english: "Blue",
    className: "bg-blue",
    image:
      "https://storage.googleapis.com/a1aa/image/dOlEErxYuzZgJNoikQsYEfXnObNNqXogb1CiIjbgSWdPb1DKA.jpg",
  },
  {
    name: "பச்சை",
    english: "Green",
    className: "bg-green",
    image:
      "https://storage.googleapis.com/a1aa/image/bR52gdeSsesR40W1WSuLZi85NGEDPwDh8ofxX4jSVzeBaregC.jpg",
  },
  {
    name: "மஞ்சள்",
    english: "Yellow",
    className: "bg-yellow",
    image:
      "https://storage.googleapis.com/a1aa/image/unps43rCeZ0meEBvMJcM24SIks23tO3reYNrffxAKHUjzW9gC.jpg",
  },
  {
    name: "ஊதா",
    english: "Purple",
    className: "bg-purple",
    image:
      "https://storage.googleapis.com/a1aa/image/65k3vJXMVyYhKVyx9NcCv30SPOLvPiwHpM7JfTWRNoYNb1DKA.jpg",
  },
  {
    name: "ஆரஞ்சு",
    english: "Orange",
    className: "bg-orange",
    image:
      "https://storage.googleapis.com/a1aa/image/Ln4tHe1zXQ3QZCgHQpmmLmyZFXQSsyzM4cC1fHpzevesZregC.jpg",
  },
];

const LearnColorsTamil = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    speakColor(color);
  };

  const speakColor = (color) => {
    const englishUtterance = new SpeechSynthesisUtterance(color.english);
    englishUtterance.lang = 'en-US';
    speechSynthesis.speak(englishUtterance);

    setTimeout(() => {
      const teluguUtterance = new SpeechSynthesisUtterance(color.name);
      teluguUtterance.lang = 'te-IN';
      speechSynthesis.speak(teluguUtterance);
    }, 1000);
  };

  return (
    <div className="app-container">
      <h1 className="title">Learn Colors in Tamil</h1>
      <div className="grid-container">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-tile ${color.className}`}
            onClick={() => handleColorClick(color)}
          >
            <div className="text-container">
              <p className="telugu-name">{color.name}</p>
              <p className="english-name">{color.english}</p>
            </div>
            <img
              src={color.image}
              alt={`Cartoon character wearing ${color.english} dress`}
              className="character-image"
            />
            <span className="volume-icon">
              <i className="fas fa-volume-up"></i>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnColorsTamil;
