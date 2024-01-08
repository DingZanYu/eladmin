import cookie from 'js-cookie'

const TokenKey = 'tokenkey'

export function getToken() {
  return cookie.get(TokenKey)
}
export function setToken(token: string) {
  return cookie.set(TokenKey, token)
}
export function removeToken() {
  return cookie.remove(TokenKey)
}

export default { getToken, setToken, removeToken }
