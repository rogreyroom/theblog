import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './posts/postsSlice'
import commentsSlice from './comments/commentsSlice'
import usersSlice from './users/usersSlice'

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    comments: commentsSlice.reducer,
    users: usersSlice.reducer,
  },
})

export default store
