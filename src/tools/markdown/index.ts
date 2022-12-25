import hljs from 'highlight.js'
import ClipboardJS from 'clipboard'

/**
 * 添加高亮类名
 * @param {HTMLElement} dom - HTMLElement - 添加高亮类名的代码块的 DOM 元素。
 */
export function heightLightMethods(dom: HTMLElement) {
  const blocks = dom!.querySelectorAll('pre code')
  blocks.forEach((block: Element) => {
    hljs.highlightBlock(block as HTMLElement)
  })
}

/**
 * 它将行号添加到所有代码块
 */
export function addLineNumer(dom: HTMLElement) {
  const e = dom.querySelectorAll('pre code')
  const e_len = e.length
  let i
  for (i = 0; i < e_len; i++)
    e[i].innerHTML = `<ul><li>${e[i].innerHTML.replace(/\n/g, '\n</li><li>')}\n</li></ul>`
}

/**
 * 它向每个代码块添加一个按钮，用于将代码复制到剪贴板。
 */
export function codecopy_func(dom: HTMLElement) {
  // 获取所有的代码区域的pre元素节点
  const codecopys = dom.getElementsByTagName('pre')
  Array.from(codecopys).forEach((item, idx) => {
    const btn = document.createElement('button')
    btn.className = `codecopy-btn btn${idx}`
    btn.innerHTML = '复制';
    (item as HTMLElement).style.position = 'relative';
    (item as HTMLElement).appendChild(btn)
    const clipboard = new ClipboardJS(`.btn${idx}`, {
      target: () => item.querySelector('code')!,
    })
    clipboard.on('success', () => {
      btn.innerHTML = '复制成功'
      setTimeout(() => {
        btn.innerHTML = '复制'
      }, 3 * 1000)
    })
  })
}

export default function initMarkdownCodeOperation(dom: HTMLElement): void {
  heightLightMethods(dom)
  addLineNumer(dom)
  codecopy_func(dom)
}

