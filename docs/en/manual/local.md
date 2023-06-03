---
title: local storage
icon: creative
category: [功能,教程]
---

::: warning Warning
Due to project selection and design (not introducing SSR, and using file routing, that is, the file name is used as routing), the local storage preview configuration is cumbersome, sorry! ! !
:::

### how to configure

If the backend uses containerized deployment, the local storage needs to be mounted to the container, otherwise the local storage cannot be used.

Then configure the proxy domain name domain to ensure that it can be mapped to the folder address mounted on the server.

For example, the domain of the demo site is `diyfileproxy.besscroft.com`, and the local folder `/root/local` is mounted through Nginx.
Then directly access the domain name and keep up with the relative path. If you can access normally, it will be ok! Example path: https://diyfileproxy.besscroft.com/104627442_p0.jpg
