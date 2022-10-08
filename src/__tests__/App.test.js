// describe('hello', () => {
//   test('world', () => {
//     expect(true)
//   })
// })

import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render, screen, cleanup } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from '../App'

import store from '../store'

// import axiosMock from 'axios'
// import pingpongService from '../services/pingpong'
// jest.mock('axios')

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

  // test('renders element Pingpong mockApi', () => {
  //   // NOTE: solve 'Network Error'
  //   jest.mock('axios')
  //   axiosMock.get.mockResolvedValueOnce(
  //     {
  //       data: 'pong'
  //     }
  //   )

  //   pingpongService.getPingPong()
  //     .then(res => {
  //       // expect(res.status).toBe(200)
  //       expect(typeof res).toBe('string')
  //       expect(res).toContain('pong')
  //       // expect(axiosMock.get).toHaveBeenCalledTimes(1)  // 1 time if assert success --> How about fail vs res.status = 300 !!!
  //       // expect(axiosMock.get).toHaveBeenCalledWith('undefined/api/ping')  // !!!
  //     })
  // })

})