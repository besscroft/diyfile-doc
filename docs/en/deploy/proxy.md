---
title: reverse proxy
---

::: warning Notice
Please strictly follow the steps below, otherwise it may be unusable!
:::

### Backend Nginx proxy configuration

```nginx
# The agent forwards the request to the gateway, and the @api identifier solves the cross-domain problem, such as http://localhost:8080 for local
location ^~ /@api/ {
  proxy_pass https://api.besscroft.com; # Here's an example, make it your own! ! !
}
```

> Please note that if your backend is deployed on the server and uses the domain name to resolve to Nginx, then you must do this proxy forwarding, because the front-end request to the back-end API is prefixed with `/@api` for logo.


