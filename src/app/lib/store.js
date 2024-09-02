"use client"
//app/lib/store.js
import { configureStore } from "@reduxjs/toolkit"
import userDataReducer from "./userDataSlice"

export const makeStore = ()=>{
    return configureStore({
        reducer:{
            user:userDataReducer
        }
    })
}