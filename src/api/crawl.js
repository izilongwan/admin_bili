import request from '~/utils/request'
import API from './config'

const req = (method, params) => 
  request({
    url: API.COMMON_API,
    method: 'post',
    data: {
      module: 'crawler',
      method,
      params
    }
  })

export const crawlerData = (params) => req('crawlerData', params)

export const crawlerSettings = (params) => req('crawlerSettings', params)

export const crawlerSettingsUpdate = (params) => req('crawlerSettingsUpdate', params)
