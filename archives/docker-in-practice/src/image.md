# Image

- - -

## [startserver-docker sample](https://github.com/startserver/startserver-docker)

- - -

```shell
$ docker images                       # List images
$ docker pull xudafeng/startserver
$ docker search xudafeng/startserver
$ docker rmi xudafeng/startserver
$ docker history xudafeng/startserver
$ docker push
$ docker save
$ docker load
```

- - -

```shell
$ docker rmi $(docker images -q -f dangling=true)
```

- - -

## Dockerfile

- - -

```
FROM mhart/alpine-node:4

ENV SERVER_PORT 8085

MAINTAINER xdf<xudafeng@126.com>

RUN npm i startserver -g

EXPOSE $SERVER_PORT

COPY . /src

WORKDIR /home

ENTRYPOINT ["/src/entrypoint.sh"]
```

- - -

## Build Image

```shell
$ docker build .
$ docker build -t="startserver" .
```
