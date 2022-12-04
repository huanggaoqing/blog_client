<script setup lang="ts">
import useThemeStore from '~/store/theme.store'
const themeStore = useThemeStore()
themeStore.handleSystemTheme()
</script>

<template>
  <router-view />
</template>
