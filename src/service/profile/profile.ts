import MarkdownIt from 'markdown-it'
import dayjs from 'dayjs'
import type { IProfileData } from './profile.type'
import request from '~/request'
import { ProfileApi } from '~/request/api'
const makedownParse = new MarkdownIt()
/**
 * 获取个人简介请求方法
 * @param {number} userId - 用户ID。
 * @returns 个人简介数据
 */
export async function getProFileRequest(userId: number): Promise<IProfileData> {
  const res = await request.get(ProfileApi.GET_PROFILE, { params: { userId } })
  return {
    ...res.data,
    createTime: dayjs(res.data?.createTime).format('YYYY-MM-DD HH:mm:ss'),
    updateTime: dayjs(res.data?.updateTime).format('YYYY-MM-DD HH:mm:ss'),
    content: makedownParse.render(res.data?.content ?? ''),
  }
}
