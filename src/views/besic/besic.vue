<!-- eslint-disable no-console -->
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import type { IMenu } from './typings'
import menuList from '~/views/besic/menu-list.const'
import useThemeStore from '~/store/theme.store'
import Menu from '~/views/besic/component/menu.vue'
import useDeviceType from '~/hooks/useDeviceType'
const router = useRouter()
const deviceType = useDeviceType()
const theme = useThemeStore()
const { isDark } = storeToRefs(theme)
function toPath(item: IMenu): void {
  console.log({ item })
  // router.push(path)
}
function changeTheme(): void {
  const baseTheme = document.documentElement.getAttribute('data-theme')
  theme.setCurrentTheme(baseTheme === 'light')
}
</script>

<template>
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
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
.test-icon {
  width: 16px;
  height: 16px;
  font-size: 20px;
}

.blog-container {
  display: flex;
  flex-direction: column;

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
  }
}
</style>
