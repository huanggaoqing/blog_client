<script lang="ts" setup></script>

<template>
  <div class="blog-list-group">
    <div class="blog-list-group-title">
      2022
    </div>
    <div class="blog-list-group-inner">
      <div class="blog-list-item">
        <div class="blog-list-item-title">
          Dev SSR on Nuxt with Vite
        </div>
        <div class="blog-list-item-time">
          Oct 4 · 15min
        </div>
      </div>
      <div class="blog-list-item">
        <div class="blog-list-item-title">
          Dev SSR on Nuxt with Vite
        </div>
        <div class="blog-list-item-time">
          Oct 4 · 15min
        </div>
      </div>
      <div class="blog-list-item">
        <div class="blog-list-item-title">
          Dev SSR on Nuxt with Vite
        </div>
        <div class="blog-list-item-time">
          Oct 4 · 15min
        </div>
      </div>
      <div class="blog-list-item">
        <div class="blog-list-item-title">
          Dev SSR on Nuxt with Vite
        </div>
        <div class="blog-list-item-time">
          Oct 4 · 15min
        </div>
      </div>
      <div class="blog-list-item">
        <div class="blog-list-item-title">
          Dev SSR on Nuxt with Vite
        </div>
        <div class="blog-list-item-time">
          Oct 4 · 15min
        </div>
      </div>
      <div class="blog-list-item">
        <div class="blog-list-item-title">
          Dev SSR on Nuxt with Vite
        </div>
        <div class="blog-list-item-time">
          Oct 4 · 15min
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
      }
      .blog-list-item-time {
        color: var(--text-color);
        opacity: .5;
        font-size: 16px;
      }
    }
  }
}
</style>
