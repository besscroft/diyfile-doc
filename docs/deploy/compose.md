---
title: Docker Compose
---

- Docker Compose 示例：

```yaml
version: '3'
services:
  diyfile:
    container_name: diyfile
    image: besscroft/diyfile:latest
    ports:
      - "8080:8080"
    environment:
      SPRING_PROFILE: "sqlite"
      JAVA_OPTS: "-Xms512m -Xmx512m -Duser.timezone=GMT+08 -Dfile.encoding=UTF8"
    volumes:
      - /root/data:/data
  diyfile-web:
    container_name: diyfile-web
    image: besscroft/diyfile-web:latest
    ports:
      - "80:80"
```

> 注意，请根据实际情况修改配置。比如端口，数据库版本以及其它配置等。
> Docker Compose 示例默认为前后端一起部署了，更多请查看仔细文档！！！

