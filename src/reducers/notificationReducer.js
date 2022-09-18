import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
// const initialState = { success: 'Login success' }
// const initialState = { fail: 'wrong username or password' }

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    removeNotification() {
      return initialState
    },
  },
})

export const { setNotification, removeNotification } = notificationSlice.actions

let timeoutID
export const throwNotification = (content, time) => {
  return async dispatch => {
    dispatch(setNotification(content))

    // setTimeout(() => {
    //   dispatch(removeNotification(content))
    // }, time*1000)

    if(timeoutID) {
      clearTimeout(timeoutID)
    }

    timeoutID = setTimeout(() => {
      dispatch(removeNotification())
    }, time*1000)
  }
}

export default notificationSlice.reducer