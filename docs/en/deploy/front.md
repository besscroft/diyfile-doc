---
title: front-end deployment
---

::: tip Multi-platform deployment support
You only need to choose one of the many ways. I recommend using Vercel deployment because it is free and easy to deploy.
:::

## Nginx deployment front-end

First [download](https://github.com/besscroft/diyfile-web/releases) the latest version of the resource package. After decompression, put the `dist` directory into the `html` directory of nginx.

### Nginx reverse proxy configuration

```nginx
# The agent forwards the request to the gateway, and the @api identifier solves the cross-domain problem, such as http://localhost:8080 for local
location ^~ /@api/ {
  proxy_pass https://api.besscroft.com; # Here's an example, make it your own! ! !
}

# This is used to rewrite the path
location / {
  try_files $uri $uri/ /index.html; 
}
```

## Vercel Deployment Frontend

First Fork [front-end project](https://github.com/besscroft/diyfile-web), and then modify the back-end address in `api/proxy.ts` to your own address.

```ts
const apiProxy = createProxyMiddleware({
    target: 'https://api.besscroft.com/@api', // Here is an example, change it to your own, such as https://api.example.com/@api
    changeOrigin: true,
    pathRewrite: {
        '^/@api/': '/',
    },
})
```

Then deploy the project in Vercel.

## Netlify deployment frontend

First Fork [front-end project](https://github.com/besscroft/diyfile-web), and then modify the back-end address in `netlify.toml` to your own address.

```toml
[[redirects]]
  from = "/@api/*"
  to = "https://api.besscroft.com/:splat"
  status = 200
  force = true
```

> In the same way, just replace the address here.
