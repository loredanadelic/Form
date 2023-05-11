const states = ["Hrvatska", "Norveška", "Francuska", "Italija", "Slovenija"];
const Select = ({ values, setValues, name }) => {
  const handleChange = (event) => {
    setValues((prev) => {
      const newValues = { ...prev, [name]: event.target.value };
      return newValues;
    });
  };
  return (
    <>
      <label htmlFor="state">Država</label>
      <select id="state" onChange={handleChange} defaultValue={values}>
        {states.map((state) => {
          return <option key={state}>{state}</option>;
        })}
      </select>
    </>
  );
};
export default Select;
