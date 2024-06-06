import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./controll/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
