---
title: 数据库
---

## 数据库准备

我们目前支持 mysql 和 mariadb 两种数据库，推荐使用 mariadb。

新建数据库 `diyfile`，将 sql 文件导入进数据库。

> `V1__schema.sql` 这种 `__schema.sql` 结尾的为结构表，`V1.1__data.sql` 这种 `__data.sql` 结尾的为数据表。

在项目的 `diyfile-system/src/main/resources/db/mysql/migration` 目录下进行 [下载](https://github.com/besscroft/diyfile/tree/main/diyfile-system/src/main/resources/db/mysql/migration)。

::: tip 默认账号密码
超级管理员默认账号密码为 diyfile/666666
:::
