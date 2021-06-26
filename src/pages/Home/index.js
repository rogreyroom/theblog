import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPostsData } from '../../redux/posts/postsActions'
import BlogList from '../../components/BlogList'
import { fetchPhotosData } from '../../redux/photos/photosActions'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPostsData())
    dispatch(fetchPhotosData())
  }, [dispatch])

  return (
    <>
      <h2>Home page</h2>
      <BlogList />
    </>
  )
}

export default Home
