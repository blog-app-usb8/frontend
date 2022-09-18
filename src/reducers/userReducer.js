import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'
import { throwNotification } from './notificationReducer'
import blogsService from '../services/blogs'

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    set(state, action) {
      return action.payload
    },
    login(state, action) {
      return action.payload
    },
    logout() {
      return null
    },
  },
})

export const { set, login, logout } = userSlice.actions

export const initializeUserFromLocalStorage = () => {
  return async dispatch => {
    const _user = window.localStorage.getItem('localUser')

    if (_user) {
      const _userObj = JSON.parse(_user)
      dispatch(set(_userObj))
      blogsService.setToken(_userObj.token)
    }
  }
}

export const loginUser = (username, password) => {
  return async dispatch => {
    try {
      const authenticatedUser = await loginService.login({
        username,
        password,
      })
      dispatch(login(authenticatedUser))
      dispatch(throwNotification({ success: 'Logged in successfully' }, 5))

      blogsService.setToken(authenticatedUser.token)
      window.localStorage.setItem('localUser', JSON.stringify(authenticatedUser))
    } catch (exception) {
      dispatch(throwNotification({ fail: 'wrong username or password' }, 5))
    }
  }
}

export const logoutUser = () => {
  return async dispatch => {
    window.localStorage.removeItem('localUser')
    dispatch(logout())
  }
}

export default userSlice.reducer