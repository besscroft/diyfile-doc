import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'diyfile 文档',
    description: '当然是文档啦！',
    lastUpdated: true,
    ignoreDeadLinks: true,
    cleanUrls: true,
    themeConfig: {
        logo: '/logo.png',
        outlineTitle: '当前页面',
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/diyfile/' },
            { text: '关于', link: '/about' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/besscroft/diyfile' },
        ],
        editLink: {
            pattern: 'https://github.com/besscroft/diyfile-doc/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        sidebar: {
            '/diyfile/': [
                { text: 'Guide', link: '/diyfile/' },
                {
                    text: '部署',
                    items: [
                        { text: '快速开始', link: '/diyfile/install/quick' },
                        { text: '前端部署', link: '/diyfile/install/front' },
                        { text: '反向代理', link: '/diyfile/install/proxy' },
                    ]
                },
                {
                    text: '进阶部署',
                    items: [
                        { text: '数据库', link: '/diyfile/deploy/database' },
                        { text: '后端部署', link: '/diyfile/deploy/backend' },
                        { text: '白嫖方案', link: '/diyfile/deploy/free/' },
                    ]
                },
                {
                    text: '开发',
                    items: [
                        { text: '开发', link: '/diyfile/dev/' },
                        { text: 'Swagger 支持', link: '/diyfile/install/swagger' },
                    ]
                },
                { text: '常见问题', link: '/diyfile/faqs/' },
            ],
        },
        footer: {
            copyright: 'MIT Licensed | Copyright © 2023-present Bess Croft'
        }
    }
})
