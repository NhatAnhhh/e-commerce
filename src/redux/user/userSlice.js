import { createSlice } from '@reduxjs/toolkit';
import { getGlobalState } from '../../utils/getGloabal';

//

const initialState = {
  ...getGlobalState(),
  noticeCount: 0,
  locale: localStorage.getItem('locale') || 'en_US',
  menuList: [],
  users: {
    lists: [],
    currentPage: 0,
  },
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const fetchAsyncAllUsers = createAsyncThunk('users/fetchAllUsers', async state => {
//   const response = await fetchListUser(state);

//   return response;
// });

// export const addNewUserAsync = createAsyncThunk('users/addNewUser', async state => {
//   const response = await createNewUser(state);

//   return response;
// });

// export const deleteUserAsync = createAsyncThunk('users/deleteUser', async id => {
//   const response = await deleteUser(id);
//   await fetchListUser();
//   return response;
// });

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    SET_MENU_LIST: (state, action) => {
      state.menuList = action.payload.menuList;
    },
    SET_ASSIGN_STATE: (state, action) => {
      Object.assign(state, action.payload);
    },

    fetchAllUser: (state, action) => {
      state.users.lists = action.payload.contents;
    },
  },
});

export const { SET_MENU_LIST, SET_ASSIGN_STATE, fetchAllUser } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export default userSlice.reducer;
