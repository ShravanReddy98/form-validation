import { createSlice } from "@reduxjs/toolkit"


const initialState={
    user:null,
    isAuthenticated:false,
    error:null,
    role:'user',
}

const authSlice=createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        loginRequest:(state)=>{
            state.error=null
        },
        loginSuccess:(state,action)=>{
            state.user=action.payload.user;
            state.isAuthenticated=true
            state.error=null
            state.role=action.payload.authType
        },
        loginFailure:(state,action)=>{
            state.error=action.payload
        },
        updateRole:(state,action)=>{
            state.role=action.payload
        },
        logout:(state)=>{
           return {...initialState,user:null,isAuthenticated:false}
        },
    }
})

export const {actions}=authSlice
export default authSlice.reducer