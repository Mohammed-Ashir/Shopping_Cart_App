import {configureStore} from '@reduxjs/toolkit';
import MyProductReducer from '../redux/MyProduceSlice';
import MyCartReducer from '../redux/CartSlice';
export const mystore = configureStore({
  reducer: {
    product: MyProductReducer,
    cart: MyCartReducer,
  },
});
