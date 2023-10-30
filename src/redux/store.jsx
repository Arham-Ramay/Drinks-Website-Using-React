import { configureStore } from "@reduxjs/toolkit";
import cocktailReducer from "../redux/features/cocktailSlice";

const store = configureStore({
    reducer: {
        app: cocktailReducer, // Use cocktailReducer here
    }
});

export default store;
 