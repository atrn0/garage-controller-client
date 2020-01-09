const login = (token: string): void => {
  sessionStorage.setItem('token', token)
}

const logout = (): void => {
  sessionStorage.removeItem('token')
}

const isLoggedIn = (): boolean => {
  return !!sessionStorage.getItem('token')
}

const getToken = (): string | null => {
  return isLoggedIn() ? sessionStorage.getItem('token') : null
}

export { login, logout, isLoggedIn, getToken }
