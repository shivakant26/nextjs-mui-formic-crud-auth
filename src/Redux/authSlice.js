import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loginData:[],
    status:null,
    message:""
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        loginUser:(state , action)=>{
            if(action.payload.userName === 'admin' && action.payload.password === '123456'){
                   localStorage.setItem('token',"123456ds21sd542ssd");
                   state.status = 200;
                   state.message = "Login successfully"
                 }else{
                    state.status = 400;
                    state.message = "Somethings went Wrong !"
             }
        },
    },
})

export const { loginUser } = authSlice.actions

export default authSlice.reducer;