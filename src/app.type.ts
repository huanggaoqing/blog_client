export interface IPageAndSize {
  page: number
  size: number
}

export interface IPageAndSizeResponse<T> {
  currentPage: number
  size: number
  list: T
  total: number
}
