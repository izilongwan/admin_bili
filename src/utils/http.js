import axios from 'axios'

import { baseURL } from '@/config';

const service = axios.create({
  baseURL,
  timeout: 60 * 1000,
  withCredentials: true
})

/**
 * 格式化回包数据
 * @param res any
 * @returns [boolean, any]
 */
 export function formatReqData (res) {
  try {
    const ret = {}
    const { retCode, retBody = {}, retMsg } = res

    if (retCode !== 0) {
      return [true, { code: retCode, msg: retMsg }]
    }

    for (const key in retBody) {
      if (Object.prototype.hasOwnProperty.call(retBody, key)) {
        const { retBody: body = {}, retMsg, retCode } = retBody[key] || {};
        
        if (retCode !== 0) {
          ret[key] = [{ code: retCode, msg: retMsg }, null]
          continue
        }

        ret[key] = body.code === 0
          ? [false, body]
          : [body, null]
      }
    }

    return [false, ret]
  } 
  catch (err) {
    err.message && (err.msg = err.message)
    return [err, null]
  }
}

export async function http (...args) {
  return service(...args)
    .then(res => formatReqData(res.data))
    .catch(err => {
      err.message && (err.msg = err.message)
      return [err, null]
    })
}
