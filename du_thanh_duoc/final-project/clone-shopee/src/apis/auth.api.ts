import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

interface AuthAccount {
  email: string
  password: string
}

const authApi = {
  registerAccount: (body: AuthAccount) => http.post<AuthResponse>('/register', body),
  loginAccount: (body: AuthAccount) => http.post<AuthResponse>('/login', body),
  logout: () => http.post('/logout')
}

// export const registerAccount = (body: AuthAccount) => http.post<AuthResponse>('/register', body)
// export const loginAccount = (body: AuthAccount) => http.post<AuthResponse>('/login', body)
// export const logout = () => http.post('/logout')

export default authApi
