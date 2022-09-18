import { configureStore } from '@reduxjs/toolkit'

import blogsReducer from './reducers/blogsReducer'
import notificationReducer from './reducers/notificationReducer'
import userReducer from './reducers/userReducer'
import writersReducer from './reducers/writersReducer'

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    notification: notificationReducer,
    user: userReducer,
    writers: writersReducer,
  }
})

export default store