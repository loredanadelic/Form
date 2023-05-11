const Order = ({ order }) => {
  return (
    <div>
      <h2>Narudžba</h2>
      <div className="formSection">
        <p>Email: {order.email}</p>
        <p>Ime: {order.name}</p>
        <p>Adresa: {order.address}</p>
        <p>Država: {order.state}</p>
        <p>Način plaćanja: {order.payingMethod}</p>
      </div>
    </div>
  );
};
export default Order;
