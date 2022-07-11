import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./modules/rootReducer";

const store = configureStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof store.getState>;
