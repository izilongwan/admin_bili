import { req } from './config'

export const getData = (params) => req({
  0: {
    module: 'data',
    method: 'getData',
    params,
  },
})

export const searchData = (params) => req({
  0: {
    module: 'data',
    method: 'searchData',
    params,
  },
})

export const updateData = (params) => req({
  0: {
    module: 'data',
    method: 'updateData',
    params,
  },
})
