#!/bin/sh
docker exec -i dvgroup-db mysql -uroot -pdvgroup -e "DROP DATABASE IF EXISTS dvgroup;";
docker exec -i dvgroup-db mysql -uroot -pdvgroup -e "CREATE DATABASE IF NOT EXISTS dvgroup;";
docker exec -i dvgroup-db mysql -uroot -pdvgroup dvgroup < ../dump.sql
docker exec -i dvgroup-db mysql -uroot -pdvgroup -e "UPDATE dvgroup.wp_options SET option_value='http://web' WHERE option_name='siteurl';";
docker exec -i dvgroup-db mysql -uroot -pdvgroup -e "UPDATE dvgroup.wp_options SET option_value='http://web' WHERE option_name='home';";
docker exec -i dvgroup-db mysql -uroot -pdvgroup -e "UPDATE dvgroup.wp_options SET option_value='test@test.ru' WHERE option_name='admin_email';";
