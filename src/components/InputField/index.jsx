import InputMask from "react-input-mask";

const InputField = ({ value, onChange, placeholder, disabled, mask }) =>
  mask ? (
    <InputMask
      mask={mask}
      className="form-control form-control-lg"
      placeholder={placeholder}
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
      disabled={disabled}
    />
  ) : (
    <input
      className="form-control form-control-lg"
      placeholder={placeholder}
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
      disabled={disabled}
    />
  );

export default InputField;
