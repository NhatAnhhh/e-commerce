import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

//

const initialState = {
  carts: [],
  ordersById: [],
  listOrders: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,

  reducers: {
    fetchAllCarts: (state, action) => {
      state.carts = action.payload.itemList;
    },

    fetchOrderByIdUser: (state, action) => {
      state.ordersById = action.payload;
    },

    fetchOrders: (state, action) => {
      state.listOrders = action.payload;
    },
  },
});

export const { fetchOrders, fetchAllCarts, fetchOrderByIdUser } = orderSlice.actions;

export default orderSlice.reducer;
