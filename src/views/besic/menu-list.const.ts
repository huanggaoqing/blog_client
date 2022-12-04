import type { IMenu } from './typings'

export default [
  {
    id: 1,
    name: 'Home',
    path: '/home',
    icon: '<div class="blog-icon-menu" i-ri-home-4-line ></div>',
  },
  {
    id: 2,
    name: 'Blog',
    path: '/blog',
    icon: '<div class="blog-icon-menu" i-ri-file-list-2-line ></div>',
  },
  {
    id: 3,
    name: 'Demos',
    path: '/demos',
    icon: '<div class="blog-icon-menu" i-ri-aspect-ratio-line ></div>',
  },
  {
    id: 4,
    name: 'About',
    path: '/about',
    icon: '<div class="blog-icon-menu" i-ri-account-circle-line ></div>',
  },
] as IMenu[]
