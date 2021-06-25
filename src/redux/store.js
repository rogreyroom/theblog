import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './posts/postsSlice'
import commentsSlice from './comments/commentsSlice'

const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    comments: commentsSlice.reducer,
  },
})

export default store
