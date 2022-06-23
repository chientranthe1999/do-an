import axios from '@/utils/axios'

export function login(data) {
  return axios.post('/auth/login', data)
}

export function getInfor() {
  return axios.get('/auth/me')
}
