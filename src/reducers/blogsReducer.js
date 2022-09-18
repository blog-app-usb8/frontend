import { createSlice } from '@reduxjs/toolkit'
import blogsService from '../services/blogs'
import { throwNotification } from './notificationReducer'

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    set(state, action) {
      return action.payload
    },
    create(state, action) {
      state.push(action.payload)
    },
    vote(state, action) {
      const changedObj = action.payload
      return state.map(o =>
        o.id !== changedObj.id ? o : changedObj
      )
    },
    del(state, action) {
      const idObj = action.payload
      return state.filter(o => o.id !== idObj)
    },
  },
})

export const { set, create, vote, del } = blogsSlice.actions

export const initializeObjs = () => {
  return async dispatch => {
    const objs = await blogsService.getAll()
    dispatch(set(objs))
  }
}

export const createObj = (newObj) => {
  return async dispatch => {
    // const createdObj = await blogsService.create(newObj)
    // dispatch(create(createdObj))
    try {
      const createdObj = await blogsService.create(newObj)
      dispatch(create(createdObj))
      dispatch(throwNotification({ success: `a new blog ${createdObj.title} - ${createdObj.author} is added` }, 5))
    } catch (exception) {
      dispatch(throwNotification({ fail: `${exception}` }, 5))
    }
  }
}

export const voteObj = (obj) => {
  return async dispatch => {
    try {
      const _obj = { ...obj }
      _obj.likes += 1
      const updatedObj = await blogsService.update(_obj, _obj.id)
      dispatch(vote(updatedObj))
      dispatch(throwNotification({ success: 'Liked' }, 5))
    } catch (exception) {
      dispatch(throwNotification({ fail: `${exception}` }, 5))
    }
  }
}

export const deleteObj = (id) => {
  return async dispatch => {
    try {
      await blogsService.del(id)
      dispatch(del(id))
      dispatch(throwNotification({ success: 'Deleted' }, 5))
    } catch (exception) {
      if (exception.response) {
        if (exception.response.status === 401) {
          dispatch(throwNotification({ fail: 'Your session is expired or Users can only delete their OWN blogs!' }, 5))
        } else if (exception.response.status === 400 || exception.response.status === 404) {
          dispatch(throwNotification({ fail: 'This blog has been removed from server or id blog is invalid type, the page will be refreshed' }, 5))
          dispatch(del(id))
        } else {
          dispatch(throwNotification({ fail: `${exception}` }, 5))
        }
      }
    }
  }
}

export default blogsSlice.reducer