import { req } from './config'

export const crawlerData = (params) => req({
  0: {
    module: 'crawler',
    method: 'crawlerData',
    params,
  },
})

export const crawlerSettings = (params) => req({
  0: {
    module: 'crawler',
    method: 'crawlerSettings',
    params,
  },
})

export const crawlerSettingsUpdate = (params) => req({
  0: {
    module: 'crawler',
    method: 'crawlerSettingsUpdate',
    params,
  },
})
