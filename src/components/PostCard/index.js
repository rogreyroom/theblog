import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { photosActions } from '../../redux/photos/photosSlice'
import { postsActions } from '../../redux/posts/postsSlice'

const PostCard = ({ id, title }) => {
  const { photos, photo } = useSelector((state) => state.photos)
  const dispatch = useDispatch()

  useEffect(() => {
    if (photos.length > 0) {
      dispatch(photosActions.getPhotoById(id))
    }
  }, [dispatch, photos])

  const setPostData = (postId) => {
    dispatch(postsActions.getPostById(postId))
  }

  return (
    <Link to={`blog/${id}`} onClick={() => setPostData(id)}>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <h4>{title}</h4>
    </Link>
  )
}

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default PostCard
