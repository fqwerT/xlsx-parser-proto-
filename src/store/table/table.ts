import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { TableType } from '../../interface/interface';


interface CounterState {
  data: TableType;
  name:string;
}

// Define the initial state using that type
const initialState: CounterState = {
  data: null,
  name: null
}

export const tableSlice = createSlice({
  name: 'table',
 
  initialState,
  reducers: {
    setTable: (state,action) => {
      state.data = action.payload
    },
    setName: (state,action) => {
      state.name = action.payload
    },
  },
})

export const { setTable,setName } = tableSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectTable = (state: RootState) => state.table.data

export default tableSlice.reducer