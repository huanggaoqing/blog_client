import MarkdownIt from 'markdown-it'
import dayjs from 'dayjs'
import request from '~/request'
import { ProfileApi } from '~/request/api'
const makedownParse = new MarkdownIt()
export interface IProfileData {
  profileId: number
  userId: number
  content: string
  createTime: string
  updateTime: string
}
export async function getProFileRequest(userId: number): Promise<IProfileData> {
  const res = await request.get(ProfileApi.GET_PROFILE, { params: { userId } })
  return {
    ...res.data,
    createTime: dayjs(res.data.createTime).format('YYYY-MM-DD HH:mm:ss'),
    updateTime: dayjs(res.data.updateTime).format('YYYY-MM-DD HH:mm:ss'),
    content: makedownParse.render(res.data.content),
  }
}
