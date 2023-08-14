import { combineReducers } from '@reduxjs/toolkit';

import userReducer from '../redux/user/userSlice';
import productReducer from '../redux/product/productSlice';
import globalReducer from '../redux/global/globalSlice';
import tagsViewReducer from '../redux/tagsview/tagsViewSlice';
import authReducer from '../redux/auth/authSlice';
import colorReducer from '../redux/color/colorSlice';
import sizeReducer from '../redux/size/sizeSlice';
import catalogReducer from '../redux/catalog/catalogSlice';
import lengthReducer from '../redux/length/lengthSlice';
import orderReducer from '../redux/order/orderSlice';
import wishlistReducer from '../redux/wishlist/wishlistSlice';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  global: globalReducer,
  auth: authReducer,
  tagsView: tagsViewReducer,
  color: colorReducer,
  size: sizeReducer,
  catalog: catalogReducer,
  order: orderReducer,
  length: lengthReducer,
  wishlist: wishlistReducer,
});

export default rootReducer;
