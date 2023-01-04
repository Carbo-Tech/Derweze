move schema.sql schema.sql.old
docker exec -it derweze-mysql-1 bash -c "mysqldump -h localhost -P 3003 -u root -p derweze > /appdb/schema.sql"