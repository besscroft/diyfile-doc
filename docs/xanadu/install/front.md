---
title: 前端部署
---

## Nginx 部署前端

首先[下载资源包](https://xanadu.besscroft.com/od/xanadu/dist-v0.1.0.7z)，解压后将 `dist` 目录放到 nginx 的 `html` 目录下。

### Nginx 反向代理配置

```nginx
# 代理转发请求至网关，@api 标识解决跨域问题， 本地的话比如 http://localhost:8080
location ^~ /@api/ {
  proxy_pass https://api.besscroft.com;
}

# 这个用于重写路径
location / {
  try_files $uri $uri/ /index.html; 
}
```
