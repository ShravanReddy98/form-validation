import { createSlice } from "@reduxjs/toolkit"

const initialState={
    drives:[],
    loading:false,
    error:null,
}

const driveSlice=createSlice({
    name:'driveSlice',
    initialState,
    reducers:{
        fetchDrivesRequest:(state)=>{
            state.loading=true
            state.error=null
        },
        fetchDrivesSuccess:(state,action)=>{
            state.drives=action.payload
            state.loading=false
            state.error=null
        },
        fetchDrivesFailure:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },
        addDrivesRequest:(state, _action)=>{
            state.loading=true
        },
        addDrivesSuccess:(state)=>{
            state.loading=false
        },
        addDrivesFailure:(state,action)=>{
            state.loading=false
            state.error=action.payload
        },
    }
})

export const {actions}=driveSlice
export default driveSlice.reducer