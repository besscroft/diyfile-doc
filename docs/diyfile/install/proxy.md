---
title: 免费方案
---

::: warning 注意
请严格按照以下步骤进行操作，否则可能会出现无法使用的情况！
:::

### 后端 Nginx 代理配置

```nginx
# 代理转发请求至网关，@api 标识解决跨域问题， 本地的话比如 http://localhost:8080
location ^~ /@api/ {
  proxy_pass https://api.besscroft.com; # 这里是示例，改成你自己的！！！
}
```

> 请注意，如果你的后端部署在服务器上，用的是域名解析到了 Nginx，然后你必须要做这个代理转发一下，因为前端请求后端的 API，都带上了 `/@api` 前缀用于标识。


