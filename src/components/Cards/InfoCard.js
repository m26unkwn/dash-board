import React from "react";
import "./card.css";

export const InfoCard = ({ cardData }) => {
  const { color, icon, title, number } = cardData;
  return (
    <div className={`card-container ${color}`}>
      <div className='card-icon'>
        <img src={icon} alt='info-icon' />
      </div>
      <div className='card-content'>
        <p>Total {title}</p>
        <h2>
          {title === "Revenues" && "$"}
          {number}
        </h2>
      </div>
    </div>
  );
};
