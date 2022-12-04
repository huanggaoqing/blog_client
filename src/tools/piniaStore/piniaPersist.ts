import type { PiniaPluginContext } from 'pinia'
import type { IStore } from './config'
export default function piniaPersist(options: IStore): (context: PiniaPluginContext) => void {
  return (context: PiniaPluginContext) => {
    const { store } = context
    if (options.session.includes(store.$id)) {
      store.$subscribe(() => {
        sessionStorage.setItem(store.$id, JSON.stringify(store.$state))
      })
      return {
        ...JSON.parse(sessionStorage.getItem(store.$id) || '{}'),
      }
    }
    else {
      store.$subscribe(() => {
        localStorage.setItem(store.$id, JSON.stringify(store.$state))
      })
      return {
        ...JSON.parse(localStorage.getItem(store.$id) || '{}'),
      }
    }
  }
}
