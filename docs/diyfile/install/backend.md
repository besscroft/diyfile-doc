---
title: 后端部署
---
## Docker 部署 Java 服务

::: tip 多平台架构支持
我们支持 `linux/amd64`、`linux/arm/v7`、`linux/arm64`、`linux/ppc64le`、`linux/s390x` 五种架构，你可以根据自己的需求来选择对应的镜像！  
:::

你可以用我打包好的 Docker 镜像进行部署，latest 版本对应最新版本的代码

在宿主机的 /root 文件夹下，新建一个名为 application-dev.yml 的文件，并将下面的内容复制到其中：

::: warning 请注意
只需要更改数据库连接地址、用户名和密码即可！
:::

```yaml
spring:
  datasource:
    driverClassName: com.mysql.jdbc.Driver
    # 数据库连接地址
    url: jdbc:mysql://127.0.0.7:3306/diyfile?serverTimezone=Asia/Shanghai&characterEncoding=utf8&useSSL=false
    # 数据库用户名
    username: root
    # 数据库密码
    password: 666666
    hikari:
      # 连接池最大连接数
      maximum-pool-size: 20
      # 空闲时保持最小连接数
      minimum-idle: 5
      # 空闲连接存活时间
      idle-timeout: 300000
      # 连接超时时间
      connection-timeout: 5000
      # 检测连接是否有效
      connection-test-query: select 1
  # 缓存
  cache:
    type: CAFFEINE
    caffeine:
      spec: maximumSize=500,initialCapacity=100,expireAfterAccess=600s

# MyBatis配置
mybatis:
  # 搜索指定包别名
  typeAliasesPackage: com.besscroft.diyfile.common.entity
  # 配置mapper的扫描，找到所有的mapper.xml映射文件
  mapperLocations: classpath*:mapper/*Mapper.xml
  configuration:
    cache-enabled: false

# mybatis-plus 配置
mybatis-plus:
  global-config:
    db-config:
      logic-delete-field: del # 全局逻辑删除的实体字段名(since 3.3.0,配置后可以忽略不配置步骤2)
      logic-delete-value: 0 # 逻辑已删除值(默认为 1)
      logic-not-delete-value: 1 # 逻辑未删除值(默认为 0)

# Actuator 配置
management:
  endpoints:
    web:
      exposure:
        # 监控项配置
        include: '*'
  endpoint:
    health:
      # 开启显示全部细节
      show-details: always
    shutdown:
      # 启用接口关闭 SpringBoot
      enabled: false
  # Micrometer 配置
  metrics:
    tags:
      application: ${spring.application.name}

# SpringDoc 配置
springdoc:
  api-docs:
    # 文档生成
    enabled: true
  swagger-ui:
    # 页面展示
    enabled: true
  # 配置扫描的包
  packages-to-scan: com.besscroft.diyfile
  cache:
    disabled: false
  pre-loading-enabled: true

sa-token:
  # token名称 (同时也是cookie名称)
  token-name: Authorization
  # token前缀
  token-prefix: Bearer
  # token有效期，单位s 默认30天, -1代表永不过期
  timeout: 2592000
  # token临时有效期 (指定时间内无操作就视为token过期) 单位: 秒
  activity-timeout: -1
  # 是否允许同一账号并发登录 (为true时允许一起登录, 为false时新登录挤掉旧登录)
  is-concurrent: true
  # 在多人登录同一账号时，是否共用一个token (为true时所有登录共用一个token, 为false时每次登录新建一个token)
  is-share: true
  # token风格
  token-style: uuid
  # 是否输出操作日志
  is-log: false
  # Cookie配置
  is-read-cookie: false
  # logo打印
  isPrint: false
```

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
  -v /root:/root \
  besscroft/diyfile:v0.1.2
```

> 端口可以自定义，docker 容器内的程序端口为 8080，你可以自定义对应的宿主机的端口，以及网络类型。请注意，容器内连接主机端口，可以使用 ip 172.17.0.1。

* 当然，你也可以指定 yaml 配置文件启动：

```shell
docker run -d --name diyfile \
	-p 8080:8080 \
	-v /root:/root \
	-e JAVA_OPTS="-Xms512m -Xmx512m -Duser.timezone=GMT+08 -Dfile.encoding=UTF8" \
	-e SPRING_CONFIG="-Dspring.config.location=/root/application-dev.yml" \
	besscroft/diyfile:v0.1.2
```

发现了吗？启动参数支持定制化，你可以根据自己的需求来调整！

> JAVA_OPTS 主要用来设置 JVM 参数。 SPRING_CONFIG 主要用来设置 Spring 应用的配置文件，当然，不指定文件也可以，比如说数据库连接地址，你可以直接用参数指定，来覆盖掉 yml 中的默认配置！
