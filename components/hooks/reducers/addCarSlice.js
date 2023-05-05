import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  model: "",
  description: "",
  error: null,
};

const addCarReducerSlice = createSlice({
  name: "addCar",
  initialState: initialState,
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setModel(state, action) {
      state.model = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearForm(state) {
      state.brand = "";
      state.model = "";
      state.description = "";
      state.error = "";
    },
  },
});

export const addCarActions = addCarReducerSlice.actions;
export default addCarReducerSlice.reducer;
