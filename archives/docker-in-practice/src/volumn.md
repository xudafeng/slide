# Data volumes

- - -

```shell
$ docker run -v /opt/data:/data startserver
$ docker rm -v CONTAINER
```

- - -

## Cross Container

```shell
$ docker run -it --name CONTAINER1 --volumes-from CONTAINER2 startserver /bin/bash
```

- - -

## Backup

```shell
$ docker run --rm --volumes-from dbdata -v $(pwd):/backup ubuntu tar zcvf /backup/mysql.tar.gz /var/lib/mysql
```
