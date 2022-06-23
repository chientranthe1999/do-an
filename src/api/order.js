import axios from '@/utils/axios'

export function order(data) {
  return axios.post('/order', data)
}

export function applyVoucher(data) {
  return axios.post('/order/apply/voucher', data)
}
