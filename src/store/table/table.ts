import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'


interface CounterState {
  data: any[] | undefined
}

// Define the initial state using that type
const initialState: CounterState = {
  data: null,
}

export const tableSlice = createSlice({
  name: 'table',
 
  initialState,
  reducers: {
    setTable: (state,action) => {
      state.data = action.payload
    },
  },
})

export const { setTable } = tableSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectTable = (state: RootState) => state.table.data

export default tableSlice.reducer