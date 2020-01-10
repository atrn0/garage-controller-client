const login = (token: string): void => {
  localStorage.setItem('token', token)
}

const logout = (): void => {
  localStorage.removeItem('token')
}

const isLoggedIn = (): boolean => {
  return !!localStorage.getItem('token')
}

const getToken = (): string | null => {
  return isLoggedIn() ? localStorage.getItem('token') : null
}

export { login, logout, isLoggedIn, getToken }
