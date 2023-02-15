import authSlice from "./authSlice";
import roleSlice from "./roleSlice";
import userSlice from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer:{
        role:roleSlice,
        user:userSlice,
        auth : authSlice
    }
})

export default store;