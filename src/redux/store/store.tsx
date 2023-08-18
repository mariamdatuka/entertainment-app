import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import itemsReducer from '../slices/ItemsSlice'
import userProfileReducer from '../slices/UserProfileSlice'

export const store=configureStore({
    reducer:{
        items:itemsReducer,
        userProfile:userProfileReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector