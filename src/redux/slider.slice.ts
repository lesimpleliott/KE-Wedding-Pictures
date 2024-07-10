import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliderStateType = {
  isOpen: boolean;
  imageID: number | null;
};

const initialState: SliderStateType = {
  isOpen: false,
  imageID: null,
};

export const appSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    openSlider: (state, action: PayloadAction<{ imageID: number }>) => {
      state.isOpen = true;
      state.imageID = action.payload.imageID;
    },
    closeSlider: (state) => {
      state.isOpen = false;
      state.imageID = null;
    },
  },
});

export const { openSlider, closeSlider } = appSlice.actions;
export default appSlice.reducer;
