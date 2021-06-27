/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    post: {},
    error: {},
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload.posts
    },
    getPostById(state, action) {
      const id = action.payload
      const existingPost = state.posts.find((post) => post.id === id)
      if (existingPost) {
        state.post = existingPost
      }
    },
    setError(state, action) {
      state.error = action.payload.error
    },
  },
})

export const postsActions = postsSlice.actions
export default postsSlice
