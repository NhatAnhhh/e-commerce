import { createSlice } from '@reduxjs/toolkit';

//

const initialState = {
  listAllProduct: [],
  bestSellers: [],

  productsHomePage: {
    lists: [],
    currentPage: 0,
  },
};

export const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    setProductList: (state, action) => {
      state.productsHomePage.lists =
        action.payload.pageNumber === 0
          ? action.payload.contents
          : [...state.productsHomePage.lists, ...action.payload.contents];
      state.productsHomePage.currentPage = action.payload.pageNumber;
      state.productsHomePage.totalPages = action.payload.totalPages;
      state.productsHomePage.totalElements = action.payload.totalElements;
    },
    setProductShops: (state, action) => {
      state.listAllProduct = action.payload;
    },
    setBestSellers: (state, action) => {
      state.bestSellers = action.payload;
    },
  },
});

export const { setProductList, setProductShops, setBestSellers } = productSlice.actions;

export default productSlice.reducer;
