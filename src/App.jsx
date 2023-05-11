import { useEffect, useState } from "react";
import FormSection from "./components/FormSection"
import Order from "./components/Order";
import { constructOrder } from "./utils";

function App() {
  const [order, setOrder] = useState(constructOrder());
  const [isOrderSet, setIsOrderSet] = useState(false);
  const handleSubmit=(newOrder)=>{
      setOrder(newOrder)
  }

  return (
    <div>
    <FormSection onSubmit={handleSubmit} order={setIsOrderSet} />
    {isOrderSet && <Order order={order}/>}
    </div>
  )
}

export default App
