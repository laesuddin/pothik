import { createSlice } from "@reduxjs/toolkit"


const initialState={
    user:undefined,
    accessToken:undefined
}

const authSlice= createSlice({
  name:"authSlice",
  initialState,
  reducers:{
    userLoggedIn:(state,action) =>{
      state.user =action.payload.user
      state.accessToken=action.payload.accessToken
    },
    userLoggedOut:(state,action)=>{
      state.user=undefined
      state.accessToken=undefined
    }
  }
})

export const {userLoggedIn,userLoggedOut} =authSlice.actions
export default authSlice.reducer