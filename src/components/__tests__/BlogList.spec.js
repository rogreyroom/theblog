/**
 * @jest-environment jsdom
 */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { screen, render, cleanup } from '@testing-library/react'
import { Provider } from 'react-redux'
import BlogList from '../BlogList'
import store from '../../redux/store'

describe('BlogList component', () => {
  let element
  beforeEach(() => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <BlogList />
        </Router>
      </Provider>,
    )
    element = container
  })

  it('renders the component', () => {
    expect(element).toMatchSnapshot()
  })

  it('component contains text "Loading..." when no data is loaded', () => {
    expect(screen.getByText(/loading/i)).toHaveTextContent('Loading...')
  })

  afterAll(cleanup)
})
