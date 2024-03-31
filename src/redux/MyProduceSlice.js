import {createSlice} from '@reduxjs/toolkit';
const MyProductSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    addMyProducts(state, action) {
      state.push(action.payload);
    },
    increaseqty(state, action) {
      let incindex = -1;
      state.map((item, index) => {
        if (item.id === action.payload) {
          incindex = index;
        }
      });
      if (incindex == -1) {
      } else {
        state[incindex].qty = state[incindex].qty + 1;
      }
    },
    decreaseqty(state, action) {
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
  },
});
export const {addMyProducts, increaseqty, decreaseqty} = MyProductSlice.actions;
export default MyProductSlice.reducer;
