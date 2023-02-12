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
  <镜像名>:<版本号>
```

* 示例命令：

```shell
docker run -d --name diyfile \
  -p 8080:8080 \
  besscroft/diyfile:v0.1.4
```

> 端口可以自定义，docker 容器内的程序端口为 8080，你可以自定义对应的宿主机的端口，以及网络类型。请注意，容器内连接主机端口，可以使用 ip 172.17.0.1。

* 当然，你也可以指定启动参数：

```shell
docker run -d --name diyfile \
	-p 8080:8080 \
	-v /root:/root \
	-e JAVA_OPTS="-Xms512m -Xmx512m -Duser.timezone=GMT+08 -Dfile.encoding=UTF8" \
	-e SPRING_CONFIG="--spring.datasource.url=jdbc:mysql://localhost:3306/diyfile?serverTimezone=Asia/Shanghai&characterEncoding=utf8&useSSL=false --spring.datasource.username=root --spring.datasource.password=666666" \
	besscroft/diyfile:v0.1.4
```

> 让我来解释一下：`-e SPRING_CONFIG="--spring.datasource.url=jdbc:mysql://{这里是ip地址}:{这里是端口}/{这里是数据库名称}?serverTimezone=Asia/Shanghai&characterEncoding=utf8&useSSL=false --spring.datasource.username={这里是数据库用户名} --spring.datasource.password={这里是数据库密码}"`，相比你应该可以照着例子自己修改了吧？

发现了吗？启动参数支持定制化，你可以根据自己的需求来调整！

> JAVA_OPTS 主要用来设置 JVM 参数。 SPRING_CONFIG 主要用来设置 Spring 应用的配置文件，当然，不指定文件也可以，比如说数据库连接地址，你可以直接用参数指定，来覆盖掉 yml 中的默认配置！
