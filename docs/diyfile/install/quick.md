---
title: 快速开始
---

::: tip 可达性提示
我们目前只做了前后端分离，你需要单独部署前端和后端！ 
:::

你可以用我打包好的 Docker 镜像进行部署，latest 版本对应最新版本的代码，你也可以根据自己的需求来选择对应的版本。

* 示例命令：

```shell
docker run -d --name diyfile \
  -p 8080:8080 \
  -e JAVA_OPTS="-Xms512m -Xmx512m -Duser.timezone=GMT+08 -Dfile.encoding=UTF8" \
  -v /root/data:/data \
  besscroft/diyfile:latest
```

`-v /root/data:/data \` 是为了将容器内目录映射到宿主机，这样你就可以在宿主机上看到数据库文件了。`:` 号左边的为宿主机目录，右边的为容器内目录。

> 注意，这个镜像是支持 sqlite 数据库版本的镜像，如果你需要使用 mysql，可以 [点击此处](../deploy/backend.md) 查看。

| 名称          | 说明                                                         | 默认值   |
| ------------- | ------------------------------------------------------------ |-------|
| FLYWAY_ENABLE | 是否进行数据库自动初始化，只支持 sqlite、mysql 8.x 版本，或者 mariadb 跟 mysql 8.x 对应的版本。 | true  |
| DOC_ENABLE    | api 文档启用                                                 | false |
| DOC_UI_ENABLE | swagger ui 启用                                              | false |

::: warning 关于容器内网络问题请注意！！！
端口可以自定义，docker 容器内的程序端口为 8080，你可以自定义对应的宿主机的端口，以及网络类型。
:::

接下来我们该进行 [前端部署](./front) 啦！
