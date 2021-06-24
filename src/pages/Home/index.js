import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <>
    <h2>Home page</h2>
    <Link to="blog/1">Test link to the blog post with id=1</Link>
  </>
)

export default Home
