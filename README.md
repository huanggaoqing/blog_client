# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
```ts
import { defineStore } from 'pinia'

const useThemeStore = defineStore('themeStore', {
  state: () => ({
    /* 设置 curretTheme 状态的初始值。 */
    curretTheme: 'light',
    /* 一个布尔值，用于确定主题是否应设置为系统主题。 */
    isSystem: true,
  }),
  getters: {
    isDark: state => state.curretTheme === 'dark',
  },
  actions: {
    /**
     * 它根据 isDark 参数的值将当前主题设置为深色或浅色，如果 systemChange 参数为 true，则将 isSystem 属性设置为 true
     * @param {boolean} isDark - boolean - 这是确定主题是深色还是浅色的值。
     * @param {boolean} [systemChange] - boolean - 是否是通过系统设置的。
     */
    setCurrentTheme(isDark: boolean, systemChange = false): void {
      this.isSystem = systemChange
      this.curretTheme = isDark ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', this.curretTheme)
    },
    /**
     * 我们正在使用 matchMedia API 来检查用户是否喜欢深色主题，如果喜欢，我们将当前主题设置为深色
     */
    handleSystemTheme(): void {
      const media = window.matchMedia('(prefers-color-scheme: dark)')
      this.setCurrentTheme(this.isSystem ? media.matches : (this.curretTheme === 'dark'), this.isSystem)
      media.addEventListener('change', (e) => {
        if (this.isSystem)
          this.setCurrentTheme(e.matches, true)
      })
    },
  },
})

export default useThemeStore
```
## 第二段代码
```ts
/* eslint-disable no-console */
import ClipboardJS from 'clipboard'
// 摘自CSDN
/* 生成复制按钮 */
// 复制按钮
export default function codecopy_func() {
  // const btn = '复制'
  // 获取所有的代码区域的pre元素节点
  const codecopys = document.getElementsByTagName('pre')
  Array.from(codecopys).forEach((item, idx) => {
    console.log({ item })
    const btn = document.createElement('button')
    btn.className = `codecopy-btn btn${idx}`
    btn.innerHTML = '复制';
    (item as HTMLElement).style.position = 'relative';
    (item as HTMLElement).appendChild(btn)
    const clipboard = new ClipboardJS(`.btn${idx}`, {
      target: () => item.querySelector('code'),
    })
    clipboard.on('success', () => {
      btn.innerHTML = '复制成功'
      setTimeout(() => {
        btn.innerHTML = '复制'
      }, 3 * 1000)
    })
  })
}
```
