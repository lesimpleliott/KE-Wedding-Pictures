import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppStateType = {
  menuIsOpen: boolean;
  password: string;
};

const savedPassword = sessionStorage.getItem("password");
const initialState: AppStateType = {
  menuIsOpen: false,
  password: savedPassword ? savedPassword : "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMenuIsOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.menuIsOpen = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
  },
});

export const { setMenuIsOpen, setPassword } = appSlice.actions;
export default appSlice.reducer;
