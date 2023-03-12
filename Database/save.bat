move schema.sql schema.sql.old
docker exec -it derweze_mysql bash -c "mysqldump -h localhost -P 3306 -u root --routines=true  -p derweze > /appdb/schema.sql"