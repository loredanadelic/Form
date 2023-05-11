const AlertModal = ({ setAlertModal }) => {
  const handleClick = (event) => {
    setAlertModal((prev) => !prev);
  };
  return (
    <div className="alertModal">
      <p>Morate prihvatiti uvjete narudžbe</p>
      <button onClick={handleClick}>U redu</button>
    </div>
  );
};

export default AlertModal;
