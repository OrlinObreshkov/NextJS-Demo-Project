import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "../reducers/registerSlice";
import sessionStorageSlice from "../reducers/sessionStorageSlice";
import signInSlice from "../reducers/signInSlice";
import addCarSlice from "../reducers/addCarSlice";

const store = configureStore({
    reducer: {
        register: registerSlice,
        session: sessionStorageSlice,
        signIn: signInSlice,
        addCar: addCarSlice
    }
})

export default store