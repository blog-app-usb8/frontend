// describe('hello', () => {
//   test('world', () => {
//     expect(true)
//   })
// })

import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render, screen, cleanup } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from './App'

import store from './store'

afterEach(() => cleanup())

describe('APP WORKED', () => {
  test('renders App content', () => {
    // render(<App />)

    // const mockHandler = jest.fn()
    // render(<App blogs={blogs} handleUpdate={mockHandler} handleRemove={mockHandler} />)    

    // const mockRedux = jest.fn() --> not finished yet
    render(
      // <Provider store={mockRedux}>
      <Provider store={store}>
        <App />
      </Provider>
    )

    // screen.debug()  // NOTE: debug
    // screen.debug(div)

    const requestLoginElement = screen.queryByText('LOG IN TO APP')
    expect(requestLoginElement).not.toBeNull()
  })

  // test('API (pingpong) worked', () => {
    // NOTE: API with cypress libraries
  // })

})