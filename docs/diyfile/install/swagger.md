---
title: Swagger 文档
---

::: tip 注意
开发环境默认启用，生产环境默认关闭，如需启用请参考下文。
:::

## 启用 Swagger 文档

你需要在 `SPRING_CONFIG` 启动参数上加上：

```shell
--springdoc.swagger-ui.enabled=true
```

默认访问路径为：`/swagger-ui.html`。

## 启用 OpenAPI 文档

你需要在 `SPRING_CONFIG` 启动参数上加上：

```shell
--springdoc.api-docs.enabled=true
```

默认访问路径为：`/api-docs`。

- YAML 格式访问路径：`/api-docs.yaml`
