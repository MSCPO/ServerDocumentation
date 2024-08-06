import { defineConfig, type DefaultTheme } from 'vitepress'
import sidebar from './Sidebar/Sidebar.mjs'

export const zh_CN = defineConfig({
  lang: 'zh-CN',
  title: 'MSCPO开服文档',
  description: '由Minecraft服务器集体宣传组织维护的开服文档',

  themeConfig: {
    logo: "/favicon.png",
    nav: nav(),
    sidebar: sidebar,
    editLink: {
      pattern: 'https://github.com/MSCPO/ServerDocumentation/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    footer: {
      message: '所有文档采用 CC BY-SA 4.0 许可协议发布',
      copyright: '© 2024 MSCPO',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '总览',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    langMenuLabel: '切换语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '主页',
      link: '/zh_CN/',
    },
    {
      text: 'Java',
      items: [
        {
          text: '导航页',
          link: '/zh_CN/JAVA/',
        },
        {
          text: 'Vanilla(原版)',
          link: '/zh_CN/JAVA/Vanilla/',
        },
        {
          text: 'Mod 服',
          link: '/zh_CN/JAVA/Mod/',
        },
        {
          text: 'Sponge',
          link: '/zh_CN/JAVA/Sponge/',
        },
        {
          text: 'Spigot系',
          link: '/zh_CN/JAVA/SpigotSeries/',
        },
        {
          text: 'Cuberite',
          link: '/zh_CN/JAVA/Cuberite/',
        },
      ],
    },
    {
      text: '基岩',
      link: '/zh_CN/Bedrock/',
      activeMatch: '/Bedrock/',
    },
    {
      text: '更多',
      items: [
        {
          text: '番外篇',
          link: '/zh_CN/Extra/',
        },
        {
          text: '编写进度',
          link: '/zh_CN/Progress',
        },
        {
          text: '主站',
          link: 'https://mscpo.mscaome.top',
        },
      ],
    },
  ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  zh_CN: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        noResultsText: '无法找到相关结果',
        resetButtonTitle: '清除查询条件',
        footer: {
          selectText: '选择',
          navigateText: '切换',
        },
      },
    },
  },
}
