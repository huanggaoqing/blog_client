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
