import axios from 'axios'
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const baseUrl = `${BACKEND_URL}/api/ping`

// const getPingPong = () => {
//   const request = axios.get(baseUrl)
//   return request.then((response) => response.data)
// }

const getPingPong = async () => {
  const response = await axios.get(baseUrl)
  return response.data  // include then & catch
}

export default { getPingPong }