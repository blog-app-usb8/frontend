import { createSlice } from '@reduxjs/toolkit'
import writersService from '../services/writers'

const writersSlice = createSlice({
  name: 'writers',
  initialState: [],
  reducers: {
    set(state, action) {
      return action.payload
    },
  },
})

export const { set } = writersSlice.actions

export const initializeObjs = () => {
  return async dispatch => {
    const objs = await writersService.getAll()
    dispatch(set(objs))
  }
}

export default writersSlice.reducer