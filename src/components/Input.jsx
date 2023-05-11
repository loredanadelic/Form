import { h2 } from "../utils";

const Input = ({ values, setValues, name, type, validate }) => {
  const handleChange = (event) => {
    setValues((prev) => {
      const newValues = { ...prev, [name]: event.target.value };
      return newValues;
    });
  };
  return (
    <div className="inputComponent">
      <label htmlFor={name}>{h2[name]} </label>
      <input
        type={type}
        id={name}
        value={values}
        onChange={handleChange}
        {...validate}
        required
      />
    </div>
  );
};

export default Input;
