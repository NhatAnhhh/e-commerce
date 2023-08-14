import { createSlice } from '@reduxjs/toolkit';

//

const initialState = {
  listColors: [],
};

export const colorSlice = createSlice({
  name: 'color',
  initialState,

  reducers: {
    setColorsList: (state, action) => {
      state.listColors = action.payload;
    },
  },
});

export const { setColorsList } = colorSlice.actions;

export default colorSlice.reducer;
