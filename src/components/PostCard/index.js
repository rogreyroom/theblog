import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { photosActions } from '../../redux/photos/photosSlice'
import { postsActions } from '../../redux/posts/postsSlice'
import classes from './index.module.scss'

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
    <Link
      to={`blog/${id}`}
      onClick={() => setPostData(id)}
      className={classes.card}
    >
      <img
        className={classes.card__image}
        src={photo.thumbnailUrl}
        alt={photo.title}
      />
      <p className={classes.card__title}>{title}</p>
    </Link>
  )
}

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default PostCard
