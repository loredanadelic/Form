import { useEffect, useState } from "react";
import { validate, validateField } from "../utils";
import Input from "./Input";

const ContactInput = ({ values, setValues, setErrors, errors }) => {
  useEffect(() => {
    const err = validateField("email", values);
    setErrors((prev) => {
      return { ...prev, email: !err };
    });
  }, [values]);
  const color = (value) => {
    return {
      backgroundColor: errors[value] ? "red" : "green",
    };
  };
  return (
    <div>
      <h2>Kontakt</h2>
      <div className="formSection">
        <Input
          values={values}
          setValues={setValues}
          name="email"
          type="email"
          validate={""}
        />
        {values !== "" && (
          <div className="validationDiv">
            <div className="dot" style={color("email")}></div>
            <p>Treba sadržavati formu emaila(npr. example@example.com)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInput;
