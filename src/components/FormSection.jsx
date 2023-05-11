import { useEffect, useState } from "react";
import { constructOrder } from "../utils";
import AddressInput from "./AddressInput";
import AlertModal from "./AlertModal";
import ConditionsInput from "./ConditionsInput";
import ContactInput from "./ContactInput";
import PayingInput from "./PayingInput";

const FormSection = ({ onSubmit, order }) => {
  const [info, setInfo] = useState(constructOrder());
  const [errors, setErrors] = useState({
    name: true,
    address: true,
    email: true,
  });
  const [alertModal, setAlertModal] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!info.conditions) {
      setAlertModal(true);
      onSubmit(constructOrder());
      order(false);
    } else {
      const parametars = { ...info };
      onSubmit(parametars);
      order(true);
      setInfo(constructOrder());
    }
  };

  const hasErr = Object.values(errors).some((err) => err === true);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ContactInput
          values={info.email}
          setValues={setInfo}
          setErrors={setErrors}
          errors={errors}
        />
        <AddressInput
          values={info}
          setValues={setInfo}
          setErrors={setErrors}
          errors={errors}
        />
        <PayingInput
          values={info.payingMethod}
          setValues={setInfo}
          name="payingMethod"
        />
        <ConditionsInput values={info.conditions} setValues={setInfo} />
        <div className="button">
          <button disabled={hasErr ? "disabled" : ""}>Naruči</button>
        </div>
      </form>
      {alertModal && <AlertModal setAlertModal={setAlertModal} />}
    </div>
  );
};

export default FormSection;
