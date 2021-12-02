import { baseURL } from '@/config';
import { http } from '../utils';

const COMMON_API = ''

export const req = (params, url = COMMON_API) =>
  http({
    url,
    method: 'POST',
    data: {
      params
    }
  })

export const CAPTCHA = baseURL + '/captcha';
