import { createSlice } from "@reduxjs/toolkit";
import React from "react";

interface IContactData {
  [k: string]: {
    elementType: React.ElementType;
    elementConfig: {
      type?: string;
      placeholder?: string;
      options?: { value: string; displayValue: string }[];
    };
    value: string;
  };
}

interface IContactDataState {
  orderForm: IContactData;
}

const initialState: IContactDataState = {
  orderForm: {
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your Name",
      },
      value: "",
    },
    street: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Street",
      },
      value: "",
    },
    zipCode: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "ZIP Code",
      },
      value: "",
    },
    country: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Country",
      },
      value: "",
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your E-Mail",
      },
      value: "",
    },
    deliveryMethod: {
      elementType: "select",
      elementConfig: {
        options: [
          { value: "fastest", displayValue: "Fastest" },
          { value: "cheapest", displayValue: "Cheapest" },
        ],
      },
      value: "",
    },
  },
};

const contactSlice = createSlice({
  name: "Contact",
  initialState,
  reducers: {},
});

export default contactSlice.reducer;
