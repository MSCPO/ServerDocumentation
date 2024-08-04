import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh_CN = defineConfig({
  lang: 'zh-CN',
  title: 'MSCPO开服文档',
  description: '由Minecraft服务器集体宣传组织维护的开服文档',

  themeConfig: {
    logo: "/favicon.png",
    nav: nav(),

    sidebar: {
      '/zh_CN/JAVA/Cuberite/': { base: '/zh_CN/JAVA/', items: sidebarCuberite() },
      '/zh_CN/JAVA/Vanilla/': { base: '/zh_CN/JAVA/', items: sidebarVanilla() },
    },

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
      text: 'JAVA',
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
          text: 'Sponge',
          link: '/zh_CN/JAVA/Sponge/',
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

// ##### ####### #####
// ##### Sidebar #####
// ##### ####### #####

// Cuberite Sidebar Start
function sidebarCuberite(): DefaultTheme.SidebarItem[] {
  return [
    {
      collapsed: false,
      items: [
        { 
          text: '前言',
          base: '/zh_CN/JAVA/Cuberite/',
          link: 'index'
        },
        {
          text: '简介',
          collapsed: false,
          base: '/zh_CN/JAVA/Cuberite/0_INTRODUCTION/',
          items: [
            { text: '介绍', link: '0_1_Introduction' },
            { text: '什么是 Cuberite', link: '0_2_What_is_Cuberite' },
            { text: '历史', link: '0_3_History' },
          ],
        },
        {
          text: '安装',
          collapsed: false,
          base: '/zh_CN/JAVA/Cuberite/1_INSTALLING/',
          items: [
            { text: '预编译版本', link: '1_1_Pre-Compiled_Builds' },
            { text: '自行编译 CUBERITE', link: '1_2_Compiling_Cuberite_Yourself' },
            { text: 'CUBERITE，启动！~', link: '1_3_Running_Cuberite' },
          ],
        },
        {
          text: '基础配置',
          collapsed: false,
          base: '/zh_CN/JAVA/Cuberite/2_CONFIGURATION_BASICS/',
          items: [
            { text: '配置概述', link: '2_1_CONFIGURATION_OVERVIEW' },
            { text: '权限', link: '2_2_PERMISSIONS' },
            { text: 'WEBADMIN', link: '2_3_WEBADMIN' },
            { text: '世界', link: '2_4_WORLDS' },
            { text: '插件', link: '2_5_PLUGINS' },
          ],
        },
        {
          text: '配置WORLD.INI',
          collapsed: false,
          base: '/zh_CN/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/',
          items: [
            { text: '什么是 world.ini', link: '3_1_What_is_world-ini' },
            {
              text: 'world.ini配置详解',
              collapsed: false,
              base: '/zh_CN/JAVA/Cuberite/3_CONFIGURING_WORLD_INI/',
              items: [
                { text: 'General', link: '3_2_General' },
                { text: 'Broadcasting', link: '3_3_Broadcasting' },
                { text: 'SpawnPosition', link: '3_4_SpawnPosition' },
                { text: 'Storage', link: '3_5_Storage' },
                { text: 'Plants', link: '3_6_Plants' },
                { text: 'Physics', link: '3_7_Physics' },
                { text: 'Mechanics', link: '3_8_Mechanics' },
                { text: 'Monsters', link: '3_9_Monsters' },
                { text: 'Weather', link: '3_10_Weather' },
                { text: 'Generator', link: '3_11_Generator' },
                { text: 'Other', link: '3_12_Other' },
                { text: 'Example_Configurations', link: '3_13_Example_Configurations' },
              ]
            },
          ],
        },
        { 
          text: '多世界',
          base: '/zh_CN/JAVA/Cuberite/4_MULTIWORLDS/',
          link: 'index'
        },
        { 
          text: '常见问题',
          base: '/zh_CN/JAVA/Cuberite/',
          link: 'FAQ'
        },
      ],
    },
  ]
}
// Cuberite Sidebar END

// Vanilla Sidebar Start
function sidebarVanilla(): DefaultTheme.SidebarItem[] {
  return [
    {
      collapsed: false,
      items: [
        { 
          text: '前言',
          base: '/zh_CN/JAVA/Vanilla/',
          link: 'index'
        },
        { 
          text: '快速开始',
          base: '/zh_CN/JAVA/Vanilla/',
          link: 'QuickStart'
        },
        { 
          text: '进阶',
          collapsed: false,
          base: '/zh_CN/JAVA/Vanilla/Advanced/',
          items: [
            { text: '配置文件', link: 'config' },
          ]
        },
      ],
    },
  ]
}
// Vanilla Sidebar END
