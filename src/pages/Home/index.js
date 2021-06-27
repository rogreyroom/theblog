import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPhotosData } from '../../redux/photos/photosActions'
import BlogList from '../../components/BlogList'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPhotosData())
  }, [dispatch])
  return <BlogList />
}

export default Home
