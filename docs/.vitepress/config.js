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
                    text: '安装',
                    items: [
                        { text: '前端部署', link: '/diyfile/install/front' },
                        { text: '数据库', link: '/diyfile/install/database' },
                        { text: '后端部署', link: '/diyfile/install/backend' },
                        { text: 'Swagger 支持', link: '/diyfile/install/swagger' },
                    ]
                },
                { text: '常见问题', link: '/diyfile/faqs/' },
                { text: '开发', link: '/diyfile/dev/' },
            ],
        },
        footer: {
            copyright: 'MIT Licensed | Copyright © 2023-present Bess Croft'
        }
    }
})
