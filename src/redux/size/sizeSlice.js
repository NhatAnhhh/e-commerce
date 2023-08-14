import { createSlice } from '@reduxjs/toolkit';

//

const initialState = {
  listSizes: [],
};

export const sizeSlice = createSlice({
  name: 'size',
  initialState,

  reducers: {
    setSizesList: (state, action) => {
      state.listSizes = action.payload;
    },
  },
});

export const { setSizesList } = sizeSlice.actions;

export default sizeSlice.reducer;
