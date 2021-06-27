/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    user: {},
    error: {},
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload.users
    },
    getUserById(state, action) {
      const id = action.payload
      const existingUser = state.users.find((user) => user.id === id)
      if (existingUser) {
        state.user = existingUser
      }
    },
    setError(state, action) {
      state.error = action.payload.error
    },
  },
})

export const usersActions = usersSlice.actions
export default usersSlice
