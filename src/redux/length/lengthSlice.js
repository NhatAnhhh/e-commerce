import { createSlice } from '@reduxjs/toolkit';

//

const initialState = {
  listLengths: [],
};

export const lengthSlice = createSlice({
  name: 'length',
  initialState,

  reducers: {
    setLengthsList: (state, action) => {
      state.listLengths = action.payload;
    },
  },
});

export const { setLengthsList } = lengthSlice.actions;

export default lengthSlice.reducer;
