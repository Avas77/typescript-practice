const url = "https://burger-builder-32682.firebaseio.com/";

interface IOrder {
  ingredients: {
    salad: number;
    bacon: number;
    meat: number;
    cheese: number;
  };
  totalPrice: number;
}

export const postOrder = async (order: IOrder) => {
  const response = await fetch(url + "orders.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  return response;
};
