import React from 'react'
import PropTypes from 'prop-types'
import classes from './index.module.scss'

const Post = ({ userName, photoUrl, photoTitle, postTitle, postBody }) => (
  <>
    <article className={classes.post}>
      <span className={classes.post__user}>{userName}</span>
      <img src={photoUrl} alt={photoTitle} className={classes.post__photo} />
      <h2 className={classes.post__title}>{postTitle}</h2>
      <p className={classes.post__text}>{postBody}</p>
    </article>
  </>
)

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  photoTitle: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postBody: PropTypes.string.isRequired,
}

export default Post
