import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"userSlice",
    initialState:{
        users:null,
        loading:true,
        error:false,
    },
    reducers: {
        showloading:(state)=>{
            state.error=false;
            state.loading=true;
        },
        showError: (state)=>{
            state.error=true;
            state.loading=false;
        },
        setUserData: (state,action)=>{
            state.users=action.payload;
            state.loading=false;
        }
    }
})

export default UserSlice;