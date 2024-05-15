import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import StorageKeys from "../../constants/storage-keys";

const initialState = {
  current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
  settings: {},
};

const register = createAsyncThunk("users/register", async (payload) => {
  // call api
  const data = await userApi.register(payload);

  // save data localStorage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

const login = createAsyncThunk("users/login", async (payload) => {
  // call api
  const data = await userApi.login(payload);

  // save data localStorage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

export { register, login };

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);
      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;

export default reducer;
