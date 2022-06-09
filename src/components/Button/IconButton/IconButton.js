import React from "react";
import "./iconbtn.css";
export const IconButton = ({ icon, text, onClick }) => {
  return (
    <button className='icon-btn' onClick={onClick}>
      <img src={icon} alt={text} />
      <span>{text}</span>
    </button>
  );
};
