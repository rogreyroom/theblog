import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import NavBar from './components/NavBar'
import Routes from './Router'
import 'normalize.css'
import './styles/globals.scss'
import classes from './App.module.scss'

export const App = () => (
  <Router>
    <NavBar />
    <main className={classes.main}>
      <Routes />
    </main>
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
