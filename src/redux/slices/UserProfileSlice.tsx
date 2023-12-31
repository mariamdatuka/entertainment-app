import { createSlice } from '@reduxjs/toolkit';

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: null,
    reducers: {
      setUserProfile: (state, action) => {
        return state=action.payload;
      },
    },
  });

export const {setUserProfile} = userProfileSlice.actions;

export default userProfileSlice.reducer;