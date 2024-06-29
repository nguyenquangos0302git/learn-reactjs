import axios, { AxiosError, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { AuthResponse } from 'src/types/auth.type'
import {
  clearLocalStorage,
  getAccessTokenFromLocalStorage,
  getProfileFromLocalStorage,
  setAccessTokenToLocalStorage,
  setProfileToLocalStorage
} from './auth'
import path from 'src/constants/path'
import { User } from 'src/types/user.type'

class Http {
  instance: AxiosInstance
  private accessToken: string
  private profile: User | null
  constructor() {
    this.accessToken = getAccessTokenFromLocalStorage()
    this.profile = getProfileFromLocalStorage()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        console.log(response)
        if (url === path.login || url === path.register) {
          this.accessToken = (response.data as AuthResponse).data.access_token
          this.profile = (response.data as AuthResponse).data.user
          setAccessTokenToLocalStorage(this.accessToken)
          setProfileToLocalStorage(this.profile)
        } else if (url === path.logout) {
          this.accessToken = ''
          this.profile = null
          clearLocalStorage()
        }
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          console.log(error)
          const data: any | undefined = error.request?.data
          const message = data?.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
