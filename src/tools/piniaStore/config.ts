export interface IStore {
  session: string[]
  local: string[]
}
export default {
  session: ['themeStore'],
  local: [],
} as IStore
