---
title: 前端部署
---

## Nginx 部署前端

首先[下载](https://demo.besscroft.com/od/release)最新版本资源包，解压后将 `dist` 目录放到 nginx 的 `html` 目录下。

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
