<script lang="ts" setup>
import { computed, reactive, ref, watchEffect } from 'vue'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
import BlogGroup from './component/blogGroup.vue'
import { getArticleListRequest } from '~/service/article/article'
import type { IArticleData, IArticleItem } from '~/service/article/article.type'
const router = useRouter()
const pageAndSize = reactive({
  page: 1,
  size: 10,
})
const articleData = ref<IArticleData[]>([])
const total = ref<number>(0)
const len = ref<number>(0)
async function getArticleList() {
  const res = await getArticleListRequest(pageAndSize)
  listToMap(res.list)
  total.value = res.total
  len.value = len.value + res.list.length
}
watchEffect(() => {
  getArticleList()
})
// 数据格式转换
function listToMap(list: IArticleItem[]): void {
  list.reduce((prev, current) => {
    const year = dayjs(current.createTime).year()
    const c = prev.find(item => item.year === year)
    current = { ...current, createTime: dayjs(current.createTime).format('MM-DD HH:mm:ss') }
    c ? c.list.push(current) : prev.push({ year, list: [current] })
    return prev
  }, articleData.value as IArticleData[]).sort((a, b) => b.year - a.year)
}
function handleLoadMore() {
  pageAndSize.page++
}
function handleSeeDetail(articleId: string) {
  router.push(`/blogDetail/${articleId}`)
}
const isShow = computed(() => len.value < total.value)
</script>

<template>
  <div class="blog-list">
    <BlogGroup
      v-for="(item) in articleData"
      :key="item.year"
      :data="item"
      @handle-click="handleSeeDetail"
    />
    <div class="blog-operation">
      <div v-show="isShow" class="load-more" @click="handleLoadMore">
        Load More...
      </div>
    </div>
  </div>
</template>

<style lang="less">
.blog-list{
  font-family: "renjianmengyousuixingtiziti";
}
  .blog-operation {
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    .load-more {
      font-size: 14px;
      color: var(--text-color);
      border-bottom: 1px solid var(--text-color);
      cursor: pointer;
      padding: 0 3px;
      &:hover {
        color: var(--text-active-color);
        border-color: var(--text-active-color);
      }
    }
  }
</style>
