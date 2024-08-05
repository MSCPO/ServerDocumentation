export default {
    '/zh_CN/JAVA/Cuberite/': {
        base: '/zh_CN/JAVA/',
        items: [
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
            }
        ]
    },
}
