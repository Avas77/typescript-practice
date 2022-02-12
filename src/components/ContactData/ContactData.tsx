import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import Input from "../Input/Input";

const ContactData = () => {
  const { orderForm } = useAppSelector((state) => state.contact);
  let orderFormArr = [];
  for (let key in orderForm) {
    orderFormArr.push({
      id: key,
      config: orderForm[key],
    });
  }
  return (
    <div>
      {orderFormArr.map((order) => (
        <Input
          as={order.config.elementType}
          key={order.id}
          config={order.config.elementConfig}
          value={order.config.value}
        />
      ))}
    </div>
  );
};

export default ContactData;
