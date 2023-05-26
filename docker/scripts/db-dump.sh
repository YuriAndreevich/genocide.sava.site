#!/bin/sh
rm -rf ../dump.sql
docker exec -i dvgroup-db mysqldump -uroot -pdvgroup dvgroup > ../dump.sql
