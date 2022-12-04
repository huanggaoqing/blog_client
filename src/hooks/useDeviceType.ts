import type { Ref } from 'vue'
import { ref } from 'vue'
import type { deviceType } from '~/tools/deviceType/getDeviceType'
import getDeviceType from '~/tools/deviceType/getDeviceType'

/**
 * 它返回一个包含设备类型的反应变量
 * @returns 包含设备类型的 ref 对象。
 */
export default function useDeviceType(): Ref<deviceType> {
  const deviceType = ref<deviceType>('pc')
  deviceType.value = getDeviceType()
  window.addEventListener('resize', () => {
    deviceType.value = getDeviceType()
  })
  return deviceType
}
