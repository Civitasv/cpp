# Make a Web server

## Why

调查 Web server 是怎么工作的。

## What is computer network

计算机之间相互连接的网络。

> <https://www.youtube.com/watch?v=tSodBEAJz9Y&list=PLF1hDMPPRqGxpYdo0ctaa7MxfOi9vjs1u&index=1>

## OSI 模型

OSI 全称 open system interconnection，即开放式系统互联参考模型。

关于网络的七层架构。

### 物理层(Physical)

物理层通过光缆、电缆、无线电波等方式将设备连接起来，从而传输比特流。

### 数据链路层(Data Link)

> 格式：|以太网头部|IP 头部|TCP/UDP 头部|应用层数据包|以太网尾部

数据链路层控制网络层与物理层之间的通信，它根据以太网协议将一组电信号组成一个数据包，称作“帧”，并控制它的传输。

- Mac 地址
  - 作用：定位数据包的路径，如发送者、接收者
  - 网卡地址，每个网卡都是独一无二的12个16进制数
    - 前6个是表厂商号，后6个是表流水号
- 广播方式：发送者把数据包，发送给局域网内的所有 PC，每个PC根据Mac地址自动匹配
  - 发送媒介是分组交换机/网络交换机

### 网络层(Network)

> 格式：|IP 头部|TCP/UDP 头部|应用层数据包

网络层最重要的作用是 IP 寻址和路由的选择。

IP 寻址方面，引入了新的地址模式-IP地址/网络地址，通过位运算（&）可以区分哪些PC是在同一子网内（ip & 255.255.255.0）。目前，IP 主要包括 IPv4 和 IPv6。

- IPv4：4字节，3字节标识网络，1字节标识主机
- IPv6：8字节

路由方面，目的是通过网络把数据从原地址发送到目标地址。

- 路由器：连接两个或多个网络并实现路由功能的机器
- 网关：网络层使用的路由器，通常指路由器的IP

#### DNS
  
### 传输层(Transport)

> 格式：|TCP/UDP头部|应用层数据包

传输层的目的是建立，维护，管理端口到端口的连接

- 端口号：取值为0-65535，0-1023为系统占用，http: 80， https: 443
- TCP：复杂，稳定，有包遗失的时候会重新发送
- UDP：简单，但不稳定，不能确定对方是否成功接收
- Socket通信时，需要指定 IP，端口号，以及通信采用的协议栈（TCP/UDP）

### 会话层(Session)，建立，维护，管理会话连接，SMTP，DNS (TCP/IP 模型没有这个)

### 表示层(Presentation)，数据的格式化，加密，解密 (TCP/IP 模型没有这个)

### 应用层(Application)，为应用程序提供网络服务，HTTP，FTP

> 格式：|应用层数据包

应用层的作用是规定应用程序的数据格式，如 ftp，http，smtp 的数据格式，从而，传输层可以按照这种格式进行信息的传递。

## Reference

1. [cerveur](https://github.com/infraredCoding/cerveur)
