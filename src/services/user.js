import axios from 'axios'
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const baseUrl = `${BACKEND_URL}/api/users`

const signup = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

export default { signup }
