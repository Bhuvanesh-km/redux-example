import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import ToDoSlice from "./ToDoSlice";

const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    todoSlice: ToDoSlice.reducer,
  },
});

export default store;
