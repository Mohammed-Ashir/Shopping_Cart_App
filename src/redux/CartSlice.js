import {createSlice} from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductsToCart(state, action) {
      let incindex = -1;
      state.map((item, index) => {
        if (item.id === action.payload.id) {
          incindex = index;
        }
      });
      if (incindex == -1) {
        state.push({
          qty: action.payload.qty + 1,
        });
      } else {
        state[incindex].qty = state[incindex].qty + 1;
      }
    },
    decreasecartqty(state, action) {
      let incindex = -1;
      state.map((item, index) => {
        if (item.id === action.payload) {
          incindex = index;
        }
      });
      if (incindex == -1) {
      } else {
        state[incindex].qty = state[incindex].qty - 1;
      }
    },
    removeProductsToCart(state, action) {
      let incindex = -1;
      state.map((item, index) => {
        if (item.id === action.payload.id) {
          incindex = index;
        }
      });
      if (incindex == -1) {
      } else {
        state[incindex].qty = state[incindex].qty - 1;
      }
    },
    deleteProductsToCart(state, action) {
      return (state = state.filter(item => item.id !== action.payload));
    },
  },
});
export const {
  addProductsToCart,
  removeProductsToCart,
  deleteProductsToCart,
  decreasecartqty,
} = cartSlice.actions;
export default cartSlice.reducer;
