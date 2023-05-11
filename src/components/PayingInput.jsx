import Input from "./Input";

const PayingInput = ({ values, setValues, name }) => {
  return (
    <div>
      <h2>Način plaćanja</h2>
      <div className="formSection">
        <div className="radioInput">
          <input
            type="radio"
            id="Pouzeće"
            name="paymentMethod"
            value="Pouzeće"
            checked={values === "Pouzeće" ? "checked" : ""}
            onChange={(event) => {
              setValues((prev) => {
                const newValues = { ...prev, [name]: event.target.value };
                return newValues;
              });
            }}
          />
          <label htmlFor="Pouzeće" className="radio">
            Pouzeće
          </label>
        </div>
        <div className="radioInput">
          <input
            type="radio"
            id="Kartica"
            name="paymentMethod"
            value="Kartica"
            checked={values === "Kartica" ? "checked" : ""}
            onChange={(event) => {
              setValues((prev) => {
                const newValues = { ...prev, [name]: event.target.value };
                return newValues;
              });
            }}
          />
          <label htmlFor="Kartica" className="radio">
            Kartica
          </label>
        </div>
      </div>
    </div>
  );
};

export default PayingInput;
