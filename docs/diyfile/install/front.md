---
title: 前端部署
---

## Nginx 部署前端

首先[下载](https://github.com/besscroft/diyfile-web/releases)最新版本资源包，解压后将 `dist` 目录放到 nginx 的 `html` 目录下。

### Nginx 反向代理配置

```nginx
# 代理转发请求至网关，@api 标识解决跨域问题， 本地的话比如 http://localhost:8080
location ^~ /@api/ {
  proxy_pass https://api.besscroft.com; # 这里是示例，改成你自己的！！！
}

# 这个用于重写路径
location / {
  try_files $uri $uri/ /index.html; 
}
```

## Vercel 部署前端

首先 Fork [前端项目](https://github.com/besscroft/diyfile-web)，然后修改 `api/proxy.ts` 中的后端地址为你自己的地址。

```ts
const apiProxy = createProxyMiddleware({
    target: 'https://api.besscroft.com/@api', // 这里是示例，改成你自己的，如 https://api.example.com/@api
    changeOrigin: true,
    pathRewrite: {
        '^/@api/': '/',
    },
})
```

然后在 Vercel 中部署项目。

## Netlify 部署前端

首先 Fork [前端项目](https://github.com/besscroft/diyfile-web)，然后修改 `netlify.toml` 中的后端地址为你自己的地址。

```toml
[[redirects]]
  from = "/@api/*"
  to = "https://api.besscroft.com/:splat"
  status = 200
  force = true
```

> 同理，这里也是替换一下地址就行了.
