/**
 * 它接受一个字符串并返回一个字符串
 * @param {string} name - 图像文件的名称。
 * @returns 一个字符串
 */
export default function getImageUrl(name: string): string {
  return new URL(`../../assets/image/${name}`, import.meta.url).href
}
