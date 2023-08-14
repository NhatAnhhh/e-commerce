import catalogService from '@/services/catalogService';
import { setCatalogsList } from './catalogSlice';

export const addAsyncCatalog = data => {
  return async dispatch => {
    const response = await catalogService.addCatalogs(data);
    dispatch(fetchAllAsyncCatalogs());
    return response;
  };
};

export const deleteAsyncCatalog = data => {
  return async dispatch => {
    const res = await catalogService.deleteCatalogs(data);
    dispatch(fetchAllAsyncCatalogs());
    return res;
  };
};

export const fetchAllAsyncCatalogs = () => {
  return async dispatch => {
    const res = await catalogService.getListCatalogs();
    dispatch(setCatalogsList(res));
  };
};
