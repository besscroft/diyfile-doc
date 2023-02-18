---
title: 后端部署
---
## Docker 部署 Java 服务

::: tip 多平台架构支持
我们支持 `linux/amd64`、`linux/arm/v7`、`linux/arm64`、`linux/ppc64le`、`linux/s390x` 五种架构，你可以根据自己的需求来选择对应的镜像！  
:::

你可以用我打包好的 Docker 镜像进行部署，latest 版本对应最新版本的代码，你也可以根据自己的需求来选择对应的版本。

* 命令模板：

```shell
docker run -d --name <容器名> \
  --net <网络类型> \
  -p <主机端口>:<容器端口> \
  -v <宿主机目录>:<容器目录> \
  -e <环境变量名>=<环境变量值> \
  <镜像名>:<版本号>
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
  besscroft/diyfile:latest
```

> 端口可以自定义，docker 容器内的程序端口为 8080，你可以自定义对应的宿主机的端口，以及网络类型。请注意，容器内连接主机端口，可以使用 ip 172.17.0.1。

* 下面是对上面内容的解释：

```shell
docker run -d --name diyfile \
	-p 8080:8080 \
	-e JAVA_OPTS="JVM 参数" \
	-e DB_URL="数据库连接地址和端口" \
	-e DB_NAME="数据库名称" \
	-e DB_USERNAME="数据库用户名" \
	-e DB_PASSWORD="数据库密码" \
	besscroft/diyfile:latest
```
