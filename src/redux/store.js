import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import postsSlice from './posts/postsSlice'
import commentsSlice from './comments/commentsSlice'
import usersSlice from './users/usersSlice'
import photosSlice from './photos/photosSlice'
import favSlice from './favs/favSlice'

const reducers = combineReducers({
  posts: postsSlice.reducer,
  comments: commentsSlice.reducer,
  users: usersSlice.reducer,
  photos: photosSlice.reducer,
  favs: favSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favs'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export default store
