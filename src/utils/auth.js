import Cookies from 'js-cookie'

const TokenKey = 'eastcom-token'
const SSOKey = 'access_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getSSOToken() {
  return Cookies.get(SSOKey)
}

export function setSSOToken(token) {
  return Cookies.set(SSOKey, token)
}

export function removeSSOToken() {
  return Cookies.remove(SSOKey)
}
