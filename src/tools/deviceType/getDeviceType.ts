export type deviceType = 'pc' | 'mobile'
/**
 * 判断当前设备类型
 * @returns 返回设备类型
 */
export default function getDeviceType(): deviceType {
  const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
  )
  return flag ? 'mobile' : 'pc'
}
