import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./redux/app.slice";
import sliderSlice from "./redux/slider.slice";

const store = configureStore({
  reducer: {
    app: appSlice,
    slider: sliderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
