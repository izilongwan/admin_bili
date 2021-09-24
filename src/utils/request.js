import axios from 'axios'

import { baseURL } from '~/config';
import { asyncFunc } from './tools'

const service = axios.create({
  baseURL,
  timeout: 60 * 1000,
  withCredentials: true
})

export default async (...args) => asyncFunc(() => service(...args))
