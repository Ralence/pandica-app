import { createReducer } from "@reduxjs/toolkit";

const userInitialState = {
  name: null,
  phone: null,
  email: null,
  addressInfo: {
    municipality: null,
    street: null,
    number: null,
    objectType: null,
    interphone: null,
    floor: null,
    deliveryNote: "",
  },
};

const userReducer = createReducer({ user: userInitialState }, {});

export default userReducer;
