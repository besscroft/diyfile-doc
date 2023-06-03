---
title: 本地存储
icon: creative
category: [功能,教程]
---

::: warning 请注意
因项目选型以及设计（未引入 SSR，以及使用文件路由，也就是文件名称当成路由），导致本地存储预览配置繁琐，抱歉！！！
:::

### 如何配置

如果后端使用容器化部署，需要将本地存储挂载到容器中，否则无法使用本地存储。

然后配置代理域名 domain，确保能过映射到服务器上挂载的文件夹地址。

比如演示站点的 domain 为 `diyfileproxy.besscroft.com`，并通过 Nginx 挂载了本地文件夹 `/root/local`。
那么直接访问域名，并跟上相对路径，能够正常访问的话，就 ok 了！示例路径：https://diyfileproxy.besscroft.com/104627442_p0.jpg
