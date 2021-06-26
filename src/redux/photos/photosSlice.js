/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    photos: [],
    photo: {},
    error: {},
  },
  reducers: {
    setPhotos(state, action) {
      state.photos = action.payload.photos
    },
    getPhotoById(state, action) {
      const id = action.payload
      const existingPhoto = state.photos.find((photo) => photo.id === id)
      if (existingPhoto) {
        state.photo = existingPhoto
      }
    },
    setError(state, action) {
      state.error = action.payload.error
    },
  },
})

export const photosActions = photosSlice.actions
export default photosSlice
