import React from "react";
import "./primarybtn.css";

export const PrimaryButton = ({ text, onClick }) => {
  return (
    <button className='btn' onClick={onClick}>
      {text}
    </button>
  );
};
