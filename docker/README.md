# Docker quick guide
### :wave: welcome I hope you learn docker, with this guide I will be improving it from to time.
[:arrow_backward: Back](../README.md)

***Language***
- [🇪🇸 Spanish](./README.es.md)
- 🇺🇸 English

***Requirements***
- Basic linux commands
- [Docker installation](https://docs.docker.com/get-docker/)

> You can follow [my docker installation guide for windows](./docker-installation-windows.md)
# Index
- [General concepts](##General-concepts)
- [Get start](##Get-start)
  - [Hello-world](###Hello-world)
  - [Basic docker commands](###Basic-docker-commands)
  - [Useful flags to get started](###Useful-flags-to-get-started)
  - [Tricks combined with linux command](###Tricks-combined-with-linux-command)
    - [Examples](###Examples)
  - [Image](###Image)
    - [Example with nginx](####Example-with-nginx)
  - [Container](###Containers)
  - [Volume](###Volume)
- [CLI references](##Cli-references)

## General-concepts
| word | Description |
| --- | --- |
| Daemon | Is running in the background |
|Images | Is an immutable file that contains the source code, libraries, dependecies, tools, and other files needed for an aplication to run |
| Containers | Is a runnable instance of an image you can create, start, stop, move, or delete |

> [more information about docker architecture](https://docs.docker.com/get-started/overview/#docker-architecture)

## Get-start

### Hello-world
```
 $ docker run hello-world
 Unable to find image 'hello-world:latest' locally
 latest: Pulling from library/hello-world
 0e03bdcc26d7: Pull complete 
 Digest: sha256:31b9c7d48790f0d8c50ab433d9c3b7e17666d6993084c002c2ff1ca09b96391d
 Status: Downloaded newer image for hello-world:latest

 Hello from Docker!
 This message shows that your installation appears to be working correctly.
```
### Basic-docker-commands
| commands | Description |
| --- | --- |
|`docker pull <name-image>` | Is used yo download an image. |
|`docker images` | Shows images we have downloaded. |
|`docker rmi <name-image/image-id>` | It is to remove the image. |
|`docker ps -a`| Shows the containers/images that are executed. |
|`docker ps`| Displays containers/images in daemon mode. |
|`docker stop <names/container-id>` | stops the execution of containers/images. |
|`docker rm <name/container-id>`| It is to delete the execution history. |

> Be careful if you want to delete an image or its execution history, you would have to stop the execution and then delete it from its history and then it could delete the image. there is a way to remove it with a `-f` flag more details on how to use below.

### Useful-flags-to-get-started
Flags in docker have their full mode and short mode.
They can be identified as follows: `--all` or `-a`

| flags | Description |
| --- | --- |
|`-h` | has a general use it will show you all the options that the command has.|
|`-q` | Only display container IDs|
|`docker <rm/rmi> -f` | Is use to forcibly remove |

### Tricks-combined-with-linux-command

| Commands | Description |
| --- | --- |
|`\| grep <keyword>` | To filter|
|`$()` | Command substitution allows the output of a command to replace the command itself | 

#### Examples
1 grep
```
[senixcode@localhost challenge-upload-learned-github]$ docker images 
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
mongo         latest    ca8e14b1fda6   9 days ago      493MB
ubuntu        latest    f63181f19b2f   9 days ago      72.9MB
hello-world   latest    bf756fb1ae65   13 months ago   13.3kB
[senixcode@localhost challenge-upload-learned-github]$ docker images | grep mon
mongo         latest    ca8e14b1fda6   9 days ago      493MB
hello-world   latest    bf756fb1ae65   13 months ago   13.3kB
```
2 $(), this will delete all history
```
[senixcode@localhost challenge-upload-learned-github]$ docker ps -a
CONTAINER ID   IMAGE         COMMAND       CREATED        STATUS                   PORTS     NAMES
0ccadf71b815   hello-world   "/hello"      3 hours ago    Exited (0) 3 hours ago             silly_wiles
5d6fcd02dfc3   ubuntu        "/bin/bash"   10 hours ago   Exited (0) 7 hours ago             test-volume-ubuntu
[senixcode@localhost challenge-upload-learned-github]$ docker rm $(docker ps -aq)
0ccadf71b815
5d6fcd02dfc3
```
### Image
An image is like a build of any application, some examples can be mongodb, mysql, node, go, ubuntu, etc. There is [dockerhub](https://hub.docker.com/) which  is the platform where all the images already made are centered.
> If you worked with nodejs, you could say that **dockerhub** is like npm for nodejs.

#### Example-with-nginx

1. We will look for the image, you cant do it in [dockerhub](https://hub.docker.com/) or through terminal, I will show you through the terminal and we will filter the official images.

```bash
[senixcode@localhost challenge-upload-learned-github]$ docker search --filter is-official=true  nginx
NAME      DESCRIPTION                STARS     OFFICIAL   AUTOMATED
nginx     Official build of Nginx.   14372     [OK]
```
2. Here we download it.

```bash
[senixcode@localhost challenge-upload-learned-github]$ docker pull nginx
Using default tag: latest
latest: Pulling from library/nginx
```
3. I will show you two ways to run an image.

  - First way is interactive, that's why we put the `-it` flag on it. 
> If you close the terminal, it will no longer be running.
```bash
[senixcode@localhost challenge-upload-learned-github]$ docker run -it nginx bash
root@337c1e7a3f81:/#
```
  - The second way may be more useful for you. We tell it to run in the bakground `-d` and on port 4000 `-p <output port>:<internal port>`
```bash
[senixcode@localhost challenge-upload-learned-github]$ docker run --name my-ngnix -d -p 4000:80 nginx
16e6124ddb4038730e6162a205b2a985cbb12cfbccfa7f230ca268881bf69872
[senixcode@localhost challenge-upload-learned-github]$ docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                  NAMES
819219ff264a   nginx     "/docker-entrypoint.…"   4 minutes ago   Up 4 minutes   0.0.0.0:4000->80/tcp   my-ngnix
```
 - You can verify by opening in you browser or through you terminal
 ```bash
 $ curl http://localhost:4000
 ```
> All the flag options you can find [here](https://docs.docker.com/engine/reference/commandline/run/#options) 

4. You will see how to stop, start and delete it.

 - To stop it or start it, you can do it with the name (NAMES) or id (CONTAINER ID), previously we passed a name with `--name`.
  ```bash
  $ docker stop my-nginx
  $ docker start my-nginx
  ```
  - To make sure that if you have deleted use the `-a` flag.
  ```bash
   $ docker ps -a
   $ docker rm my-nginx
   $ docker ps -a
  ``` 
### Container
### Volume
## Cli-references
- [docker version](https://docs.docker.com/engine/reference/commandline/version/) 
- [docker search](https://docs.docker.com/engine/reference/commandline/search/)
- [docker run](https://docs.docker.com/engine/reference/commandline/run/) 
- [docker image](https://docs.docker.com/engine/reference/commandline/image/) 
- [docker container](https://docs.docker.com/engine/reference/commandline/container/) 

