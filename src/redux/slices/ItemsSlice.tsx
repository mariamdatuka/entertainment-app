import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {Data} from '../../../types.ts'
import { getAllData } from "../../api/api.ts";


export const fetchDataAsync=createAsyncThunk('items/getAllData', async()=>{
    const response=await getAllData();
    return response.data;
})


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
   extraReducers:(builder)=>{
      builder
      .addCase(fetchDataAsync.pending, (state)=>{
          state.loading=true;
          state.error=null;
      })
      .addCase(fetchDataAsync.fulfilled, (state,action)=>{
        state.loading=false;
        state.error=null;
        state.items=action.payload
      })
      .addCase(fetchDataAsync.rejected, (state,action)=>{
        state.loading=false;
        state.error=action.error.message
      })
   }

})

export default itemsSlice.reducer