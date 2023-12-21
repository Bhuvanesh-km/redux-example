import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import ToDoSlice from "./ToDoSlice";
import UserSlice from "./UserSlice";
import thunkMiddleWare from "redux-thunk";

const store = configureStore({
  reducer: {
    counterSlice: counterSlice.reducer,
    todoSlice: ToDoSlice.reducer,
    userSlice: UserSlice.reducer,
  },
  middleware: [thunkMiddleWare],
});

export default store;
