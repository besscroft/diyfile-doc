import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'xanadu 文档',
    description: '当然是文档啦！',
    lastUpdated: true,
    ignoreDeadLinks: true,
    themeConfig: {
        logo: '/logo.png',
        outlineTitle: '当前页面',
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/xanadu/readme' },
            { text: '关于', link: '/about' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/besscroft/xanadu' },
        ],
        editLink: {
            pattern: 'https://github.com/besscroft/xanadu-doc/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        sidebar: {

        },
        footer: {
            copyright: 'MIT Licensed | Copyright © 2023-present Bess Croft'
        }
    }
})
