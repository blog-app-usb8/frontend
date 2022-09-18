import axios from 'axios'
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const baseUrl = `${BACKEND_URL}/api/users`

// const getAll = () => {
//   const request = axios.get(baseUrl)
//   return request.then((response) => response.data)
// }

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getAll }
