/**
 * 它向主体添加一个事件侦听器，侦听所有a标签的点击时间并拦截，然后在新选项卡中打开链接
 */
export default function headDoffA(): void {
  document.body.addEventListener('click', (e: MouseEvent) => {
    const node = e.target as HTMLElement
    if (node.nodeName.toLowerCase() === 'a') {
      window.open((node as HTMLAnchorElement).href, '_blank')
      e.preventDefault()
    }
  })
}
