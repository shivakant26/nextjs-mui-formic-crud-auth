import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userData:[],
}

const userSlice = createSlice({
    name:"userCrud",
    initialState,
    reducers:{
        addUser:(state , action)=>{
            state.userData.push(action.payload);
        },
        updateUser:(state ,action)=>{
            state.userData.splice(action.payload.id,1,action.payload.values)
        },
        deleteUser:(state,action)=>{
            state.userData.splice(action.payload,1)
        }
    },
    extraReducers:{}
})

export const { addUser , updateUser , deleteUser } = userSlice.actions

export default userSlice.reducer;