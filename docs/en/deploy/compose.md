---
title: Docker Compose
---

- Docker Compose Example：

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

> Note, please modify the configuration according to the actual situation. Such as ports, database versions, and other configurations.
> The Docker Compose example is deployed with the front and back ends by default, please check the detailed documentation for more details!!!
