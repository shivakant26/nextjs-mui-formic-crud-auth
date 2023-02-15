import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    roledata:[],
    editData:""
}

const roleSlice = createSlice({
    name:"roleCrud",
    initialState,
    reducers:{
        addRole:(state , action)=>{
            state.roledata.push(action.payload);
        },
        updateRole:(state ,action)=>{
            state.roledata.splice(action.payload.id,1,action.payload.values)
        },
        deleteRole:(state,action)=>{
            state.roledata.splice(action.payload,1)
        }
    },
    extraReducers:{}
})

export const { addRole , updateRole , deleteRole } = roleSlice.actions

export default roleSlice.reducer;