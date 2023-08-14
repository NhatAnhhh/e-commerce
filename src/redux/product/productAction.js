import productService from '@/services/productService';
import { setBestSellers, setProductList, setProductShops } from './productSlice';

export const fetchAsyncAllProductsHome = ({ perPage = 4, currentPage = 0 } = {}) => {
  return async dispatch => {
    const result = await productService.getProductHome({
      currentPage,
      perPage,
    });
    dispatch(setProductList(result));
  };
};

export const addAsyncProduct = values => {
  return async dispatch => {
    const result = await productService.addProduct(values);
    dispatch(fetchAsyncGetAllProducts());
    return result;
  };
};

export const editAsyncProduct = (values, id) => {
  return async dispatch => {
    const result = await productService.editProduct(values, id);

    dispatch(fetchAsyncGetAllProducts());
    return result;
  };
};

export const deleteAsyncProduct = id => {
  return async dispatch => {
    const result = await productService.deleteProduct(id);
    dispatch(fetchAsyncGetAllProducts());
    return result;
  };
};

export const fetchAsyncGetAllProducts = () => {
  return async dispatch => {
    const result = await productService.getAllProducts();
    dispatch(setProductShops(result));
  };
};

export const fetchAsyncGetAllBestSeller = () => {
  return async dispatch => {
    const result = await productService.getBestSeller();
    dispatch(setBestSellers(result));
  };
};

export const filterAsyncProducts = values => {
  return async dispatch => {
    const result = await productService.filterProductShop(values);
    dispatch(setProductShops(result));
    // dispatch(fetchAsyncGetAllProducts());
    return result;
  };
};

export const searchAsyncProductByName = string => {
  return async dispatch => {
    const result = await productService.searchProductByName(string);
    dispatch(setProductShops(result));
    // dispatch(fetchAsyncGetAllProducts());
    return result;
  };
};
