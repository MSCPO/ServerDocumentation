import { defineConfigWithTheme } from 'vitepress'
import { zh_CN, search as zhCNSearch } from './zh_CN'
import task_lists from 'markdown-it-task-lists'
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfigWithTheme({
    lang: 'zh-CN',
    title: 'MSCPO开服文档',
    description: '由Minecraft服务器集体宣传组织维护的开服文档',

    vite: {
      optimizeDeps: {
        include: [
          '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas',
        ],
        exclude: [
          '@nolebase/vitepress-plugin-enhanced-readabilities/client',
        ],
      },
      ssr: {
        noExternal: [
          '@nolebase/vitepress-plugin-enhanced-readabilities',
          '@nolebase/ui',
        ],
      },
    },
    cleanUrls: true,
    lastUpdated: true,

    head: [
      ['link', { rel: 'icon', href: '/favicon.png' }],
      ['meta', { name: 'darkreader-lock' }],
    ],

    locales: {
      root: {
        label: '简体中文',
        ...zh_CN
      },
      zh_CN: {
        label: '简体中文',
        ...zh_CN
      },
    },

    themeConfig: {
      externalLinkIcon: true,

      editLink: {
        pattern: 'https://github.com/MSCPO/ServerDocumentation/edit/main/docs/:path',
      },

      
      socialLinks: [
        { icon: 'github', link: 'https://github.com/MSCPO/ServerDocumentation' },
      ],

      search: {
        provider: 'local',
        options: {
          locales: { ...zhCNSearch },
        },
      },

    },
    sitemap: {
      hostname: 'https://docs.mscaome.top',
    },
    markdown: {
      config: md => {
        md.use(task_lists)
        md.use(InlineLinkPreviewElementTransform)
      },
      image: {
        // 开启图片懒加载
        lazyLoading: true
      },
    },
  })
);
