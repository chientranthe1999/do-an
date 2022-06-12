import axios from '@/utils/axios'

export function login(data) {
  return axios.post('/login', data)
}
