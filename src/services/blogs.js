import axios from 'axios'
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL
const baseUrl = `${BACKEND_URL}/api/blogs`

let token = null
let config = {}

const setToken = (newToken) => {
  token = `bearer ${newToken}`
  config = {
    headers: { Authorization: token },
  }
}

// const getAll = () => {
//   const request = axios.get(baseUrl)
//   return request.then((response) => response.data)
// }

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async (newObject, id) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
  return response.data
}

const del = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.status
}

const getComments = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}/comments`)
  return response.data
}

const createComment = async (newObject, id) => {
  const response = await axios.post(`${baseUrl}/${id}/comments`, newObject)
  return response.data
}

export default { getAll, create, setToken, update, del, getComments, createComment }
