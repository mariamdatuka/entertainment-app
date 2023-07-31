import { createSlice} from "@reduxjs/toolkit";
import {Data} from '../../../types.ts'


const initialState:{
    items:Data[],
    loading: boolean;
    error: string | null | undefined;
}={
    items:[],
    loading: false,
    error: null,
}

export const itemsSlice=createSlice({
   name:'items',
   initialState,
   reducers:{},

})