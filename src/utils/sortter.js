import { formatCount } from './formatCount'

export function sorter(a, b) {
  const str = '万';
  const aCount = formatCount(a.thumb_count, str)
  const bCount = formatCount(b.thumb_count, str)

  return aCount - bCount;
}