const InputField = ({ value, onChange, placeholder, disabled }) => (
  <input
    className="form-control form-control-lg"
    placeholder={placeholder}
    value={value}
    onChange={(ev) => onChange(ev.target.value)}
    disabled={disabled}
  />
);

export default InputField;
