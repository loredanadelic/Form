import { useEffect, useState } from "react";
import { validate, validateField } from "../utils";
import Input from "./Input";
import Select from "./Select";

const AddressInput = ({ values, setValues, setErrors, errors }) => {
  useEffect(() => {
    const nameValidation = validateField("name", values.name);
    const addressValidation = validateField("address", values.address);
    setErrors((prev) => {
      return { ...prev, name: !nameValidation, address: !addressValidation };
    });
  }, [values]);
  const color = (value) => {
    return {
      backgroundColor: errors[value] ? "red" : "green",
    };
  };
  return (
    <div>
      <h2>Adresa</h2>
      <div className="formSection">
        <Input
          values={values.name}
          setValues={setValues}
          name="name"
          type="text"
          validate={validate.name}
        />
        {values.name !== "" && (
          <div className="validationDiv">
            <div className="dot" style={color("name")}></div>
            <p>Treba sadržavati minimalno 2 slova</p>
          </div>
        )}

        <Select values={values.state} setValues={setValues} name="state" />
        <Input
          values={values.address}
          setValues={setValues}
          name="address"
          type="text"
          validate={validate.address}
        />
        {values.address !== "" && (
          <div className="validationDiv">
            <div className="dot" style={color("address")}></div>
            <p>Treba sadržavati minimalno 5 slova</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressInput;
