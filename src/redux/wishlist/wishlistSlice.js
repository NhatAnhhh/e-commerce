import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishLists: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,

  reducers: {
    fetchAllWishLists: (state, action) => {
      state.wishLists = action.payload.wishList;
    },
  },
});

export const { fetchAllWishLists } = wishlistSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export default wishlistSlice.reducer;
