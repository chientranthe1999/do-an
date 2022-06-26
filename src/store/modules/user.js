import { login, getInfor } from '@/api/auth'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: null,
  roles: null,
  money: 0
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },

  SET_NAME: (state, name) => {
    state.name = name
  },

  SET_ROLES: (state, roles) => {
    state.roles = roles
  },

  SET_MONEY: (state, money) => {
    state.money = money
  }
}

const actions = {
  login({ commit }, userInfo) {
    const { email, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ email: email.trim(), password: password })
        .then((res) => {
          const { data } = res
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // get user info
  getInfor({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfor(state.token)
        .then((response) => {
          const { data } = response

          if (!data) {
            reject('Verification failed, please Login again.')
          }
          const { role, fullName, money } = data
          commit('SET_ROLES', role)
          commit('SET_NAME', fullName)
          commit('SET_MONEY', money)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  logout({ commit }) {
    commit('SET_TOKEN', '')
    commit('SET_ROLES', null)
    commit('SET_NAME', null)
    removeToken()
    resetRouter()
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
