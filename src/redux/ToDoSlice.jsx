import { createSlice } from "@reduxjs/toolkit";


const ToDoSlice= createSlice({
    name:"todoSlice",
    initialState:{
        value:"",
        todoList:[]
    },
    reducers:{
        setValue:(state,obj)=>{
            state.value=obj.payload;
        },
        addTask:(state,obj)=>{
            const task=obj.payload;
            state.todoList=[...state.todoList,task];
        }
    }
})

export default ToDoSlice;