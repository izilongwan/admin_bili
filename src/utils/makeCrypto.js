import md5 from 'js-md5'

export const makeCrypto = (str) =>
  md5.create().update(str).hex()
