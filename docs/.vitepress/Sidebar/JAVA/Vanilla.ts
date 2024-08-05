export default {
    '/zh_CN/JAVA/Vanilla/': {
        base: '/zh_CN/JAVA/',
        items: [
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
                   { 
                    text: '常见问题',
                    base: '/zh_CN/JAVA/Vanilla/',
                    link: 'FAQ'
                  },
                ],
            }
        ]
    },
}
