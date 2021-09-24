import md5 from 'js-md5'

export const asyncFunc = async (fn) => {
  try {
    const { data: { retCode: code, retBody, retMsg: msg } } = await fn();

    if (code === 0) {
      return [null, retBody]
    }

    return [{ code, msg }]
  } catch (err) {
    err.message && (err.msg = err.message)
    return [err];
  }
}

export const makeCrypto = (str) =>
  md5.create().update(str).hex()

export const findParent = (tar, className) => {
  while (tar.classList &&
    !tar.classList.contains(className)
  ) {
    tar = tar.parentNode;
  }

  return tar === document ? null : tar;
}

export function formatCount(count, str) {
  if (!count) {
    return count
  }

  return count.includes(str) ? parseInt(count) * 10000 : count
}

export function sorter(a, b) {
  const str = '万';
  const aCount = formatCount(a.thumb_count, str)
  const bCount = formatCount(b.thumb_count, str)

  return aCount - bCount;
}
