export const findParent = (tar, className) => {
  while (tar.classList &&
    !tar.classList.contains(className)
  ) {
    tar = tar.parentNode;
  }

  return tar === document ? null : tar;
}