<script lang="ts" setup>
import { computed } from 'vue'
import type { IArticleData, IArticleItem } from '~/service/article/article.type'

const props = defineProps<{
  data: IArticleData
}>()
const emits = defineEmits<{
  (e: 'handleClick', articleId: string): void
}>()
const articleData = computed(() => props.data)
</script>

<template>
  <div class="blog-list-group">
    <div class="blog-list-group-title">
      {{ articleData.year }}
    </div>
    <div class="blog-list-group-inner">
      <div
        v-for="(item) in articleData.list"
        :key="item.articleId"
        class="blog-list-item"
        @click="emits('handleClick', item.articleId)"
      >
        <div class="blog-list-item-title">
          {{ item.articleTitle }}
        </div>
        <div class="blog-list-item-time">
          {{ item.createTime }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.blog-list-group {
  .blog-list-group-title{
    font-size: 160px;
    font-weight: 800;
    color: var(--blog-group-title-color);
    user-select: none;
  }
  .blog-list-group-inner {
    margin-left: 50px;
    margin-top: -100px;
    .blog-list-item {
      margin-top: 8px;
      margin-bottom: 24px;
      cursor: pointer;
      &:hover {
        .blog-list-item-title {
          color: var(--text-active-color)
        }
        .blog-list-item-time {
          opacity: 1;
        }
      }
      .blog-list-item-title{
        font-size: 22px;
        color: var(--text-color);
        font-weight: 600;
        cursor: pointer;
        user-select: none;
      }
      .blog-list-item-time {
        color: var(--text-color);
        opacity: .5;
        font-size: 16px;
        cursor: pointer;
        user-select: none;
      }
    }
  }
}
</style>
