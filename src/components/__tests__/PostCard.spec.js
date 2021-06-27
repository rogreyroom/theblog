/**
 * @jest-environment jsdom
 */
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { screen, render, cleanup } from '@testing-library/react'
import { Provider } from 'react-redux'
import PostCard from '../PostCard'
import store from '../../redux/store'

describe('PostCard component', () => {
  let element
  beforeEach(() => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <PostCard id={1} title="Some cool title" />
        </Router>
      </Provider>,
    )
    element = container
  })

  it('renders the component', () => {
    expect(element).toMatchSnapshot()
  })

  it('component contains text "Some cool title"', () => {
    expect(screen.getByText(/title/i)).toHaveTextContent('Some cool title')
  })

  afterAll(cleanup)
})
