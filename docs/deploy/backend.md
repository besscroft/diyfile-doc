---
title: 后端部署
---

::: tip 多平台架构支持
我们支持 `linux/amd64`、`linux/arm/v7`、`linux/arm64`、`linux/ppc64le`、`linux/s390x` 五种架构，你可以根据自己的需求来选择对应的镜像！  
:::

你可以用我打包好的 Docker 镜像进行部署，`<版本号>-mysql` 版本对应最新版本的代码，你也可以根据自己的需求来选择对应的版本。mysql 版镜像支持任何兼容 mysql 的数据库，包括 mariadb 等。

* 命令模板：

```shell
docker run -d --name <容器名> \
  --net <网络类型> \
  -p <主机端口>:<容器端口> \
  -v <宿主机目录>:<容器目录> \
  -e <环境变量名>=<环境变量值> \
  <镜像名>:<版本号>-mysql
```

* 示例命令：

```shell
docker run -d --name diyfile \
  -p 8080:8080 \
  -e JAVA_OPTS="-Xms512m -Xmx512m -Duser.timezone=GMT+08 -Dfile.encoding=UTF8" \
  -e DB_URL="localhost:3306" \
  -e DB_NAME="diyfile" \
  -e DB_USERNAME="root" \
  -e DB_PASSWORD="666666" \
  besscroft/diyfile:v0.3.0-mysql
```

| 名称          | 说明                                                         | 默认值         |
| ------------- | ------------------------------------------------------------ | -------------- |
| DB_URL        | 数据库链接地址(端口)                                         | localhost:3306 |
| DB_NAME       | 数据库名称                                                   | diyfile        |
| DB_SSL        | 是否启用 SSL                                                 | false          |
| DB_USERNAME   | 数据库用户名                                                 | root           |
| DB_PASSWORD   | 数据库密码                                                   | 666666         |
| FLYWAY_ENABLE | 是否进行数据库自动初始化，只支持 sqlite、mysql 8.x 版本，或者 mariadb 跟 mysql 8.x 对应的版本。 | false          |
| DOC_ENABLE    | api 文档启用                                                 | false          |
| DOC_UI_ENABLE | swagger ui 启用                                              | false          |

::: warning 关于容器内网络问题请注意！！！
端口可以自定义，docker 容器内的程序端口为 8080，你可以自定义对应的宿主机的端口，以及网络类型。
请注意，容器内连接主机端口，可以使用 ip 172.17.0.1。或者是用 host 网络模式，直接使用主机网络。
如：

```shell
docker run -d --name diyfile \
  -p 8080:8080 \
  -e JAVA_OPTS="-Xms512m -Xmx512m -Duser.timezone=GMT+08 -Dfile.encoding=UTF8" \
  -e DB_URL="localhost:3306" \
  -e DB_NAME="diyfile" \
  -e DB_USERNAME="root" \
  -e DB_PASSWORD="666666" \
  --net host \
  besscroft/diyfile:v0.3.0-mysql
```
:::
