<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { userId } from '~/constants/constants'
import type { IProfileData } from '~/service/profile'
import { getProFileRequest } from '~/service/profile'
const profile = ref<IProfileData>()
async function getProfile(): Promise<void> {
  const data = await getProFileRequest(userId)
  profile.value = data
}
onBeforeMount(() => {
  getProfile()
})
</script>

<template>
  <div class="blog-home">
    <div v-html="profile?.content" />
    <ul v-show="profile?.content" class="blog-content-time">
      <li>
        <div>上传于：</div>
        <div class="blog-content-time-item">
          {{ profile?.createTime }}
        </div>
      </li>
      <li>
        <div>更新于：</div>
        <div class="blog-content-time-item">
          {{ profile?.updateTime }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="less">
.test {
  width: 1512px;
  background-color: red;
}

.blog-home {
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  color: var(--text-color);
  .blog-content-time {
    padding-top: 50px;
    li {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .blog-content-time-item {
      min-width: 130px;
    }
    div {
      font-size: 14px !important;
      display: inline !important;
      opacity: .6;
    }
  }
  h1 {
    font-size: 36px;
    font-weight: 800;
    color: var(--title-color);
    margin-bottom: 32px;
  }

  p,
  span {
    word-wrap:break-word;
    font-size: 16px !important;
    color: var(--text-color);
    margin-bottom: 20px;
  }

  h4{
    font-size: 20px;
    color: var(--title-color);
    transition: 0 !important;
    margin-bottom: 10px;
  }

  ul {
    font-size: 16px;
    color: var(--text-color);
    li {
      span{
        display: inline-block;
        width: 60px;
        text-align: justify;
        text-align-last: justify;
        margin-bottom: 0;
      }
    }
  }

  a {
    color: var(--link-color);
    border-bottom: 1px solid var(--link-border-color);
  }
}
</style>

