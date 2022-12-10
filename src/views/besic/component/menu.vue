<script lang="ts" setup>
import useDeviceType from '~/hooks/useDeviceType'
import type { IMenu } from '~/views/besic/besic.type'
const props = defineProps<{
  list: IMenu[]
}>()
const emits = defineEmits<{
  (e: 'handleClick', item: IMenu): void
}>()
const deviceType = useDeviceType()
function handleItemClick(item: IMenu): void {
  emits('handleClick', item)
}
</script>

<template>
  <div v-if="deviceType === 'pc'" class="blog-menu">
    <div v-for="menuItem in props.list" :key="menuItem.id" class="blog-menu-item" @click="handleItemClick(menuItem)">
      <span>{{ menuItem.name }}</span>
    </div>
  </div>
  <div v-else class="blog-menu-mobile">
    <div
      v-for="menuItem in props.list" :key="menuItem.id" class="blog-menu-item-mobile"
      @click="handleItemClick(menuItem)"
    >
      <div v-show="(menuItem.id === 1)" class="blog-icon-menu" i-ri-home-4-line />
      <div v-show="(menuItem.id === 2)" class="blog-icon-menu" i-ri-file-list-2-line />
      <div v-show="(menuItem.id === 3)" class="blog-icon-menu" i-ri-aspect-ratio-line />
      <div v-show="(menuItem.id === 4)" class="blog-icon-menu" i-ri-account-circle-line />
    </div>
  </div>
</template>

<style lang="less">
.blog-menu {
  display: flex;
  align-items: center;

  .blog-menu-item {
    font-size: 16px;
    margin-right: 20px;
    color: var(--menu-text-color);
    cursor: pointer;
    user-select: none;
    &:last-child {
      margin-right: 0px;
    }

    &:hover {
      color: var(--menu-active-text-color);
    }
  }
}

.blog-menu-mobile {
  height: 100%;
  display: flex;
  align-items: center;

  .blog-menu-item-mobile {
    margin-right: 20px;
    cursor: pointer;
    user-select: none;

    &:last-child {
      margin-right: 0px;
    }

    .blog-icon-menu {
      color: var(--menu-text-color);
      font-size: 26px;
    }

    &:hover {
      color: var(--menu-active-text-color);
    }
  }
}
</style>
