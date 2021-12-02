export function formatCount(count, str) {
  if (!count) {
    return count
  }

  return count.includes(str) ? parseInt(count) * 10000 : count
}