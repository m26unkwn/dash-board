import React from "react";
import "./iconbtn.css";
export const IconButton = ({ icon, text }) => {
  return (
    <button className='icon-btn'>
      <img src={icon} alt={text}  />
      <span>{text}</span>
    </button>
  );
};
