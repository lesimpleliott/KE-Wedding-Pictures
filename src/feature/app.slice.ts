import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppStateType = {
  menuIsOpen: boolean;
  isConnected: boolean;
};

const initialState: AppStateType = {
  menuIsOpen: false,
  isConnected: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMenuIsOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.menuIsOpen = payload;
    },
    setIsConnected: (state, { payload }: PayloadAction<boolean>) => {
      state.isConnected = payload;
    },
  },
});

export const { setMenuIsOpen, setIsConnected } = appSlice.actions;
export default appSlice.reducer;
