import request from '@/utils/request'
import API from './config'

const req = (method, params) =>
  request({
    url: API.COMMON_API,
    method: 'post',
    data: {
      module: 'data',
      method,
      params
    }
  })

export const getData = (params) => req('getData', params)

export const searchData = (params) => req('searchData', params)

export const updateData = (params) => req('updateData', params)
