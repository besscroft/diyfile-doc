---
title: database
---

## database preparation

We currently support two databases, mysql and mariadb, and mariadb is recommended.

Create a new database `diyfile` and import the sql file into the database.

> `V1__schema.sql` which ends with `__schema.sql` is a structure table, `V1.1__data.sql` which ends with `__data.sql` is a data table.

Under the `diyfile-system/src/main/resources/db/mysql/migration` directory of the project [download](https://github.com/besscroft/diyfile/tree/main/diyfile-system/src/main/resources/db/mysql/migration)。

::: tip Default account password
The default account password of the super administrator is diyfile/666666
:::
