import React from "react";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { orderReducer, userReducer, menuReducer } from "./reducers";

const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
    order: orderReducer,
  },
  middleware: [...getDefaultMiddleware()],
});

const StateProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StateProvider;
