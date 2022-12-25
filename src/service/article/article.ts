import dayjs from 'dayjs'
import type { AxiosResponse } from 'axios'
import MarkdownIt from 'markdown-it'
import type { IArticleDetail, IArticleItem } from './article.type'
import type { IPageAndSize, IPageAndSizeResponse } from '~/app.type'
import { userId } from '~/constants/constants'
import request from '~/request'
import { ArticleApi } from '~/request/api'
const makedownParse = new MarkdownIt()

export async function getArticleListRequest(pageAndSize: IPageAndSize) {
  const res = await request.get<any, AxiosResponse<IPageAndSizeResponse<IArticleItem[]>>>(
    ArticleApi.GET_LIST,
    { params: { userId, ...pageAndSize } },
  )
  return res.data
}

export async function getArticleDetailRequest(articleId: string) {
  const res = await request.get<any, AxiosResponse<IArticleDetail>>(ArticleApi.GET_DETAIL, { params: { articleId } })
  return {
    ...res.data,
    articleContent: makedownParse.render(res.data.articleContent),
    createTime: dayjs(res.data.createTime).format('YYYY-MM-DD HH:mm'),
    updateTime: dayjs(res.data.updateTime).format('YYYY-MM-DD HH:mm'),
  } as IArticleDetail
}
