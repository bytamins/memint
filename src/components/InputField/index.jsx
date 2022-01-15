const InputField = ({ value, onChange, placeholder }) => (
  <input
    className="form-control form-control-lg"
    placeholder={placeholder}
    value={value}
    onChange={(ev) => onChange(ev.target.value)}
  />
);

export default InputField;
