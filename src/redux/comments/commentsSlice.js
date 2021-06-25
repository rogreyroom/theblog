/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    postComments: [],
    error: {},
  },
  reducers: {
    setComments(state, action) {
      state.comments = action.payload.comments
    },
    getPostComments(state, action) {
      const id = action.payload
      const existingComments = state.comments.filter(
        (comment) => comment.postId === id,
      )
      if (existingComments) {
        state.postComments = existingComments
      }
    },
    setError(state, action) {
      state.error = action.payload.error
    },
  },
})

export const commentsActions = commentsSlice.actions
export default commentsSlice
