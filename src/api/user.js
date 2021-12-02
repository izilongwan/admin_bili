import { req } from './config'

export const login = (params) => req({
  0: {
    module: 'user',
    method: 'login',
    params,
  }
})

export const logout = (params) => req({
  0: {
    module: 'user',
    method: 'logout',
    params,
  }
})

export const checkLoginState = (params) => req({
  0: {
    module: 'user',
    method: 'checkLoginState',
    params,
  }
})
