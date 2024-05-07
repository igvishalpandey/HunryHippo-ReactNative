import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant: null,
}

export const counterSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action)=>{
        state.restaurant= action.payload;
    },
  },
})

export const { setRestaurant, } = counterSlice.actions;

export const selectRestaurant= state=> state.restaurant.restaurant;

export default counterSlice.reducer