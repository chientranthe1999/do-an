import Vue from 'vue'

Vue.filter('formatMoney', (money) => {
  if (!money) return ''
  const formatter = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND'
  })

  return formatter.format(money)
})
