---
layout: home

hero:
  name: DiyFile
  text: 一款好看的在线文件列表程序
  tagline: 由 Spring Boot 3 和 Vue 驱动
  actions:
  - theme: brand
    text: 开始吧
    link: /diyfile/
  - theme: alt
    text: View on GitHub
    link: https://github.com/besscroft/diyfile
  - theme: alt
    text: Demo
    link: https://demo.besscroft.com

features:
  - title: 文件预览
    details: 支持图片、视频、音频、文本、PDF 等格式的文件预览
  - title: 多存储端支持
    details: 支持多个存储提供商，包括本地存储、阿里云盘、OneDrive、Google Drive 等。
  - title: 现代化部署支持
    details: 支持 Docker 部署，方便快捷。前端支持 Vercel、Netlify 和 Nginx 部署
  - title: 多客户端支持
    details: 支持 Web 和 PWA
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://besscroft.com/uploads/avatar.jpeg',
    name: 'Bess Croft',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/besscroft' },
    ]
  },
]
</script>
<br />
<VPTeamMembers size="small" :members="members" />
