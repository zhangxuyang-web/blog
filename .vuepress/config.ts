import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'Hello, welcome to Sunny\'s blog',
  description: 'Just playing around',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    sidebar: [{
      text:"Hello",
      link: "/guide/",
      children: [{
        text:"hello",
        link: "README.md"
      }]
    }]
  },
})
