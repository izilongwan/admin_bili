import request from '@/utils/request'
import API from './config'

const req = (method, params) =>
  request({
    url: API.COMMON_API,
    method: 'post',
    data: {
      module: 'user',
      method,
      params
    }
  })

export const login = (params) => req('login', params)

export const logout = (params) => req('logout', params)

export const checkLoginState = (params) => req('checkLoginState', params)
