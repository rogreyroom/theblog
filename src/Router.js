import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/blog/:id">
      <BlogPost />
    </Route>
  </Switch>
)

export default Routes
