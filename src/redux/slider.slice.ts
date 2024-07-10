import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlbumType } from "../types/albumType";

type SliderStateType = {
  isOpen: boolean;
  album: AlbumType | null;
  imageID: number | null;
};

const initialState: SliderStateType = {
  isOpen: false,
  album: null,
  imageID: null,
};

export const appSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    openSlider: (
      state,
      action: PayloadAction<{ album: AlbumType; imageID: number }>
    ) => {
      state.isOpen = true;
      state.album = action.payload.album;
      state.imageID = action.payload.imageID;
    },
    closeSlider: (state) => {
      state.isOpen = false;
      state.album = null;
      state.imageID = null;
    },
    setImageID: (state, action: PayloadAction<number>) => {
      state.imageID = action.payload;
    },
  },
});

export const { openSlider, closeSlider, setImageID } = appSlice.actions;
export default appSlice.reducer;
