export interface IArticleItem {
  userName: string
  articleId: string
  articleTitle: string
  isStick: number
  createTime: string
  updateTime: string
}

export interface IArticleData {
  year: number
  list: IArticleItem[]
}

export interface IArticleDetail {
  articleId: string
  userName: string
  articleContent: string
  articleTitle: string
  isStick: number
  groupId: number
  tag: ITagItem[]
  createTime: string
  updateTime: string
}

export interface ITagItem {
  id: number
  name: string
  url: string
}
