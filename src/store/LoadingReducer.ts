import { createSlice } from '@reduxjs/toolkit'

export const loading = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false
  },
  reducers: {
    startLoad: state => {
      state.isLoading = true
    },
    stopLoad: state => {
      state.isLoading = false
    },
   
  }
})

// Action creators are generated for each case reducer function
export const { startLoad, stopLoad } = loading.actions

export default loading.reducer