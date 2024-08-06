export default {
    '/zh_CN/JAVA/Mod/': {
        base: '/zh_CN/JAVA/',
        items: [
            {
                collapsed: false,
                items: [
                    { 
                        text: '前言',
                        base: '/zh_CN/JAVA/Mod/',
                        link: 'index'
                    },
                    {
                        text: 'Forge / NeoForge',
                        collapsed: false,
                        base: '/zh_CN/JAVA/Mod/Forge_NeoForge/',
                        items: [
                            { text: '开服教程', link: 'index' },
                            { text: '常见问题', link: 'FAQ' },
                        ],
                    },
                    { 
                        text: 'Farbic / Quilt',
                        collapsed: false,
                        base: '/zh_CN/JAVA/Mod/Farbic_Quilt/',
                        items: [
                            {
                                text: '开服教程',
                                collapsed: false,
                                items: [
                                  { text: '快速开始', link: 'QuickStart' },
                                  { text: '进阶', link: 'Advanced' },
                                ],
                            },
                            { text: '常见问题', link: 'FAQ' },
                            { text: '注意事项', link: 'Note' },
                        ],
                    },
                ],
            }
        ]
    },
}
