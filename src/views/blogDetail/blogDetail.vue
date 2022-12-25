<script lang="ts" setup>
import { nextTick, onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import useDeviceType from '~/hooks/useDeviceType'
import { getArticleDetailRequest } from '~/service/article/article'
import type { IArticleDetail } from '~/service/article/article.type'
import initMarkdownCodeOperation from '~/tools/markdown'
const route = useRoute()
const articleDetail = ref<IArticleDetail>({} as IArticleDetail)
const deviceType = useDeviceType()
const heightlightDom = ref<HTMLElement>()
async function getArticleDetail() {
  const res = await getArticleDetailRequest(route.params.articleId as string)
  articleDetail.value = res
  await nextTick()
  initMarkdownCodeOperation(heightlightDom.value!)
}

onBeforeMount(() => {
  getArticleDetail()
})
</script>

<template>
  <div class="blog-detail">
    <h2 class="blog-detail-title">
      {{ articleDetail.articleTitle }}
    </h2>
    <div
      class="blog-desc"
      :style="{ justifyContent: deviceType === 'pc' ? 'space-between' : 'flex-end' }"
    >
      <div v-if="deviceType === 'pc'" class="blog-time">
        <span>创建时间：{{ articleDetail.createTime }}</span> -
        <span>更新时间：{{ articleDetail.updateTime }}</span>
      </div>
      <span>By： {{ articleDetail.userName }}</span>
    </div>
    <article ref="heightlightDom" class="blog-content markdown-body" v-html="articleDetail.articleContent" />
    <div v-if="articleDetail.tag?.length" v-highlight class="blog-tags">
      <div class="blog-tag-title">
        Tags：
      </div>
      <div class="blog-tag-inner">
        <div v-for="(item) in articleDetail.tag" :key="item.id" class="tag-item">
          <div class="tag-icon" i-system-uicons-tags />
          <div class="tag-text">
            <a :href="item.url"> {{ item.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.blog-detail {
  font-family: "InputMono-Regular";
  .blog-detail-title {
    font-size: 36px;
    font-weight: 800;
    color: var(--title-color);
    margin-bottom: 32px;
  }
  .blog-desc {
    display: flex;
    justify-content: space-between;
    color: var(--text-color);
    font-size: 16px;
    margin-bottom: 32px;
  }
  .blog-content {
    padding-bottom: 16px;
    margin-bottom: 16px;
    // border-bottom: 1px dashed var(--text-color);
  }
  .blog-tags {
    display: flex;
    align-items: center;
    .blog-tag-title {
      display: flex;
      font-size: 16px;
      color: var(--text-color);
      font-weight: 800;
      align-items: center;
    }
    .blog-tag-inner{
      display: flex;
      flex-wrap: wrap;
      .tag-item{
        display: flex;
        color: var(--link-color);
        margin-right: 10px;
        font-size: 12px;
        cursor: pointer;
        user-select: none;
        .tag-icon {
          font-size: 16px !important;
          color: var(--link-color);
          margin-right: -1px;
          margin-top: 5px;
        }
        .tag-text {
          padding: 3px;
          border-bottom: 1px solid var(--link-color);
          a{
            color: var(--link-color);
          }
        }
      }
    }
  }
}
</style>
