# VMware虚拟机安装

> 以Ubuntu20.04为例

参考：[2020最新版VMware安装Ubuntu20.04教程(巨细)！ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/141033713)

1. iso文件放到固态硬盘

2. 增加一个虚拟机：自定义（iso先不选、存储为单个文件）

3. 设置iso，第一次开机启动时断网（右下角网络适配器断开连接）、安装ubuntu

4. 安装VMware Tools

   - ```
     sudo apt-get install open-vm-tools-desktop
     ```

   - 参考：[清街老酒的博客 (cnblogs.com)](https://www.cnblogs.com/qingjielaojiu/p/15701808.html)

5. 换源、软件更新

   - 参考：[Ubuntu20.04软件源更换 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/142014944)

