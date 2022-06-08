import "./input.css";

export const Input = ({
  label,
  type,
  placholder,
  value,
  pattern,
  onChange,
}) => {
  return (
    <div className='input-field'>
      <label htmlFor={label}>{label}</label>
      <input
        placeholder={placholder}
        type={type}
        value={value}
        pattern={pattern}
        onChange={(e) => onChange(e)}
        required
      />
    </div>
  );
};
