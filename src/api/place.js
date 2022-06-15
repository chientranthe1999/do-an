import axios from '@/utils/axios'

export function getPlace() {
  return axios.get('/place/type-place')
}

export function getPlaceById(id) {
  return axios.get('/place/' + id)
}
