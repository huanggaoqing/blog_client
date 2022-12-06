<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import type { IMenu } from './typings'
import menuList from '~/views/besic/menu-list.const'
import useThemeStore from '~/store/theme.store'
import Menu from '~/views/besic/component/menu.vue'
import useDeviceType from '~/hooks/useDeviceType'
import getImageUrl from '~/tools/getImageUrl/getImageUrl'
const router = useRouter()
const deviceType = useDeviceType()
const theme = useThemeStore()
const { isDark } = storeToRefs(theme)
function toPath(item: IMenu): void {
  router.push(item.path)
}
function changeTheme(): void {
  const baseTheme = document.documentElement.getAttribute('data-theme')
  theme.setCurrentTheme(baseTheme === 'light')
}
</script>

<template>
  <div v-if="deviceType === 'pc'" class="blog-back-image">
    <div class="back-image-right">
      <img :src="getImageUrl(isDark ? 'color-scheme-left.svg' : 'color-scheme-left-dark.svg')">
    </div>
    <div class="back-image-left">
      <img :src="getImageUrl(isDark ? 'color-scheme-right.svg' : 'color-scheme-right-dark.svg')">
    </div>
  </div>
  <div class="blog-container">
    <div class="blog-header">
      <Menu :list="menuList" @handle-click="toPath" />
      <div class="blog-header-operation">
        <div v-show="deviceType === 'pc'" class="github-link" i-carbon-logo-github />
        <div class="theme" @click="changeTheme">
          <div v-show="!isDark" class="change-theme" i-quill-sun />
          <div v-show="isDark" class="change-theme" i-quill-moon />
        </div>
      </div>
    </div>
    <div class="blog-content">
      <div
        class="blog-inner"
        :style="{
          width: deviceType === 'pc' ? '50%' : '100%',
          padding: deviceType === 'pc' ? '30px 0px' : '30px',
        }"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="less">
.test-icon {
  width: 16px;
  height: 16px;
  font-size: 20px;
}
.blog-back-image {
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  div {
    display: flex;
    align-items: flex-end;
    flex: 1;
    img {
      width: 350px;
    }
  }
  .back-image-left {
    justify-content: flex-end;
    margin-right: 60px;
  }
}
.blog-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1000;
  .blog-header {
    padding: 32px 30px;
    display: flex;
    justify-content: flex-end;

    .blog-header-operation {
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 18px;

      .github-link {
        margin-right: 10px;
      }

      .change-theme,
      .github-link {
        font-size: 26px;
        color: var(--menu-text-color);
        cursor: pointer;

        &:hover {
          color: var(--menu-active-text-color);
        }
      }
    }
  }

  .blog-content {
    flex: 1;
    .blog-inner{
      box-sizing: border-box;
      height: 100%;
      margin: auto;
    }
  }
}
</style>
