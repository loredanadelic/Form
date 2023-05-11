const ConditionsInput = ({ values, setValues }) => {
  return (
    <div className="checkbox">
      <label htmlFor="conditions">Prihvaćam uvjete narudžbe</label>
      <input
        type="checkbox"
        id="conditions"
        value={values}
        checked={values === true ? "checked" : ""}
        onChange={(event) => {
          setValues((prev) => {
            const newValues = { ...prev, conditions: event.target.checked };
            return newValues;
          });
        }}
      />
    </div>
  );
};

export default ConditionsInput;
