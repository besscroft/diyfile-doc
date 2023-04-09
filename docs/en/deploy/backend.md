---
title: backend deployment
---

::: tip Multi-platform architecture support
We support five architectures `linux/amd64`, `linux/arm/v7`, `linux/arm64`, `linux/ppc64le`, `linux/s390x`, you can choose the corresponding image according to your needs!
:::

You can use my packaged Docker image to deploy, `<version number>-mysql` version corresponds to the latest version of the code, you can also choose the corresponding version according to your needs. The mysql version image supports any mysql-compatible database, including mariadb, etc.

* command template：

```shell
docker run -d --name <container name> \
  --net <Network Type> \
  -p <host port>:<container port> \
  -v <host directory>:<container directory> \
  -e <environment variable name>=<environment variable value> \
  <mirror name>:<version number>
```

* example command：

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

| name          | manual                                                         | Defaults         |
| ------------- | ------------------------------------------------------------ | -------------- |
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
Please note that to connect to the host port inside the container, you can use ip 172.17.0.1. Or use the host network mode to directly use the host network.
example：

```shell
docker run -d --name diyfile \
  -p 8080:8080 \
  -e SPRING_PROFILE="mysql" \
  -e JAVA_OPTS="-Xms512m -Xmx512m -Duser.timezone=GMT+08 -Dfile.encoding=UTF8" \
  -e DB_URL="localhost:3306" \
  -e DB_NAME="diyfile" \
  -e DB_USERNAME="root" \
  -e DB_PASSWORD="666666" \
  --net host \
  besscroft/diyfile:latest
```
:::
