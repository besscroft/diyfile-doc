---
title: quick start
icon: creative
category: [功能,教程]
---

## quick start

::: tip accessibility hint
We currently only separate the front-end and back-end, you need to deploy the front-end and back-end separately!
:::

You can use my packaged Docker image for deployment. The latest version corresponds to the latest version of the code, or you can choose the corresponding version according to your needs.

### start command

::: tabs
@tab sqlite Version
```shell
docker run -d --name diyfile \
  -p 8080:8080 \
  -e SPRING_PROFILE="sqlite" \
  -e JAVA_OPTS="-Xms512m -Xmx512m -Duser.timezone=GMT+08 -Dfile.encoding=UTF8" \
  -v /root/data:/data \
  besscroft/diyfile:latest
```


@tab mysql Version
```shell
docker run -d --name diyfile \
  -p 8080:8080 \
  -e SPRING_PROFILE="mysql" \
  -e JAVA_OPTS="-Xms512m -Xmx512m -Duser.timezone=GMT+08 -Dfile.encoding=UTF8" \
  -e DB_URL="localhost:3306" \
  -e DB_NAME="diyfile" \
  -e DB_USERNAME="root" \
  -e DB_PASSWORD="666666" \
  besscroft/diyfile:latest
```
:::

`-v /root/data:/data \` is to map the directory in the container to the host, so that you can see the database file on the host.
`:` The one on the left of the sign is the host directory, and the one on the right is the directory in the container.

| name          | manual                                                         | Defaults   |
| ------------- | ------------------------------------------------------------ |-------|
| DB_URL        | Database link address (port)                                         | localhost:3306 |
| DB_NAME       | Name database                                                   | diyfile        |
| DB_SSL        | Whether to enable SSL                                                 | false          |
| DB_USERNAME   | database username                                                 | root           |
| DB_PASSWORD   | database password                                                   | 666666         |
| SPRING_PROFILE | Configuration file version, options are mysql and sqlite                                         | sqlite |
| FLYWAY_ENABLE | Whether to automatically initialize the database, only supports sqlite, mysql 8.x version, or the corresponding version of mariadb and mysql 8.x. | false          |
| DOC_ENABLE    | api documentation enabled                                                 | false          |
| DOC_UI_ENABLE | swagger-ui enabled                                              | false          |

::: warning Please pay attention to the network problem in the container！！！
The port can be customized. The program port in the docker container is 8080. You can customize the corresponding host port and network type.
:::
