import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from './redux/store'
import NavBar from './components/NavBar'
import Routes from './Router'
import 'normalize.css'
import './styles/globals.scss'
import classes from './App.module.scss'
import Footer from './components/Footer'

const persistor = persistStore(store)

export const App = () => (
  <Router>
    <NavBar />
    <main className={classes.main}>
      <Routes />
    </main>
    <Footer />
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
