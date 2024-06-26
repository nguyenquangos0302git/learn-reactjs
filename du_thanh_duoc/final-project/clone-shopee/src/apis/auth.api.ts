import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

interface AuthAccount {
  email: string
  password: string
}

export const registerAccount = (body: AuthAccount) => http.post<AuthResponse>('/register', body)
export const loginAccount = (body: AuthAccount) => http.post<AuthResponse>('/login', body)
