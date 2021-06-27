/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const favsSlice = createSlice({
  name: 'favs',
  initialState: {
    fav: [],
    error: {},
  },
  reducers: {
    setFavs(state, action) {
      state.favs = action.payload.fav
    },
    addFav(state, action) {
      const id = action.payload
      const jsonPostId = JSON.stringify(id)
      state.fav = [...state.fav, jsonPostId]
    },
    removeFav(state, action) {
      const id = action.payload
      const jsonPostId = JSON.stringify(id)
      const newState = state.fav.filter((item) => item !== jsonPostId)
      state.fav = [...newState]
    },
    setError(state, action) {
      state.error = action.payload.error
    },
  },
})

export const favsActions = favsSlice.actions
export default favsSlice
