import React from 'react'
import { Link } from 'react-router-dom'
import classes from './index.module.scss'

const NavBar = () => (
  <header className={classes.header}>
    <nav className={classes.nav}>
      <Link to="/" className={classes.nav__link}>
        <p className={classes.nav__text}>home</p>
      </Link>
    </nav>
    <Link to="/" className={classes.header__link}>
      <h1 className={classes.header__logo}>TheBlog</h1>
    </Link>
  </header>
)

export default NavBar
