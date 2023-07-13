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

### First use?

If this is the first time you use it, it is recommended to download it directly in the `doc/sql` directory [download](https://github.com/besscroft/diyfile/tree/main/doc/sql) and execute the sql file in full.

### Can't you initialize it automatically?

Indeed, the database automatic initialization and update have been done, but due to the support range of the library used, some database versions may not be supported, such as MySQL 5.x version.

If you are using MySQL 8.x and the corresponding version of mariadb, there is no problem.
