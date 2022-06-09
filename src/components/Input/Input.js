import "./input.css";
import { EyeIcon, DisableEye } from "../../assets";
import { useState } from "react";

export const Input = ({
  label,
  type,
  placholder,
  value,
  pattern,
  onChange,
  eye,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const isVisibleHandler = (e) => {
    e.preventDefault();
    if (eye) {
      setIsVisible(!isVisible);
    }
  };

  return (
    <div className='input-field'>
      <label htmlFor={label}>{label}</label>
      <input
        placeholder={placholder}
        type={isVisible ? "text" : type}
        value={value}
        pattern={pattern}
        onChange={onChange}
        required
      />
      {eye && value.length > 0 && (
        <button className=' eye' onClick={isVisibleHandler}>
          {isVisible ? (
            <img src={DisableEye} alt='hide_password' />
          ) : (
            <img src={EyeIcon} alt='show_password' />
          )}
        </button>
      )}
    </div>
  );
};
