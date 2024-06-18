import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppStateType = {
  menuIsOpen: boolean;
  password: string;
  selectedPicture: number;
};

const savedPassword = sessionStorage.getItem("password");
const initialState: AppStateType = {
  menuIsOpen: false,
  password: savedPassword ? savedPassword : "",
  selectedPicture: 0,
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
    setSelectedPicture: (state, { payload }: PayloadAction<number>) => {
      state.selectedPicture = payload;
    },
  },
});

export const { setMenuIsOpen, setPassword, setSelectedPicture } =
  appSlice.actions;
export default appSlice.reducer;
