# Docker installation in windows

[:arrow_backward: Back](./README.md)

***Requirements***
- [Enable (VT)](https://support.bluestacks.com/hc/en-us/articles/115003174386-How-can-I-enable-virtualization-VT-on-my-PC-)

## setp1

You will have to restart at the end of the installation, and this will be executed at startup.[Install docker desktop for windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows/) 

> If you get this message "WSL 2 installation is incomplete",
[You have install the linux kernel upgrade package](https://docs.microsoft.com/es-es/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package)

## setp2

Check by terminal
```bash
C:\Users\senixcode>docker --version                       
Docker version 20.10.2, build 2291f61
```
```bash
C:\Users\senixcode>docker-compose --version      
docker-compose version 1.27.4, build 40524192
```