import apisauce from 'apisauce'
import { API_URL } from '../Config/AppConfig'

const create = (baseURL = API_URL) => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  //#region Authorization
  const setAuthHeaders = (token, pin) => {
    api.setHeader('Authorization', `Bearer ${token}`)
    api.setHeader('Pin', pin)
  }
  const removeAuthHeaders = () => {
    api.setHeader('Authorization', '')
    api.setHeader('Pin', '')
  }
  //#endregion
  const getProfile = () => api.get('client')
  const requestNewAccount = type => api.post('account', { type })

  return {
    api,
    setAuthHeaders,
    removeAuthHeaders,
    getProfile,
    requestNewAccount,
  }
}

export default { create }