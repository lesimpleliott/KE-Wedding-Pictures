import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./feature/app.slice";

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
