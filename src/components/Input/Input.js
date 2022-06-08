import "./input.css";

export const Input = ({ label, type, placholder }) => {
  return (
    <div className='input-field'>
      <label htmlFor={label}>{label}</label>
      <input placeholder={placholder} type={type} />
    </div>
  );
};
