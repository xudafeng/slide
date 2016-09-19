# Container

- - -

```shell
# docker start|stop|kill|restart|pause|unpause|rm|commit|inspect|logs
$ docker ps
$ docker ps -a
$ docker ps -s
$ docker logs $CONTAINER
$ docker rm $CONTAINER
```

- - -

```shell
$ docker kill $(docker ps -a -q)   # kill running container
$ docker rm $(docker ps -a -q)     # kill stoped container
```

- - -

```shell
$ docker run -it -p 8085:8085 -v $(pwd):/home xudafeng/startserver
```
