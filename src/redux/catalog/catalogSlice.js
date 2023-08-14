import { createSlice } from '@reduxjs/toolkit';

//

const initialState = {
  listCatalogs: [],
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,

  reducers: {
    setCatalogsList: (state, action) => {
      state.listCatalogs = action.payload;
    },
  },
});

export const { setCatalogsList } = catalogSlice.actions;

export default catalogSlice.reducer;
