import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { favsActions } from '../../redux/favs/favSlice'
import { SvgFavNo } from '../icons/FavNoIcon'
import { SvgFavYes } from '../icons/FavYesIcon'
import classes from './index.module.scss'

const Post = ({ userName, photoUrl, photoTitle, postTitle, postBody }) => {
  const [favPost, setFavPost] = useState('no')
  const { post } = useSelector((state) => state.posts)
  const { fav } = useSelector((state) => state.favs)
  const dispatch = useDispatch()

  useEffect(() => {
    const isFav = fav.find((favId) => favId === post.id.toString())
    return isFav ? setFavPost(() => 'yes') : setFavPost(() => 'no')
  }, [post, fav])

  const toggleFav = (id) =>
    favPost === 'no'
      ? dispatch(favsActions.addFav(id))
      : dispatch(favsActions.removeFav(id))

  return (
    <>
      <article className={classes.post}>
        <div className={classes.post__info}>
          <span className={classes.post__user}>{userName}</span>
          <button
            type="button"
            onClick={() => toggleFav(post.id)}
            className={[
              classes.post__favBtn,
              classes[`post__favBtn--${favPost}`],
            ].join(' ')}
          >
            {favPost === 'no' ? <SvgFavNo /> : <SvgFavYes />}
          </button>
        </div>
        <img src={photoUrl} alt={photoTitle} className={classes.post__photo} />
        <h2 className={classes.post__title}>{postTitle}</h2>
        <p className={classes.post__text}>{postBody}</p>
      </article>
    </>
  )
}

Post.propTypes = {
  userName: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  photoTitle: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postBody: PropTypes.string.isRequired,
}

export default Post
