# WSL2配置

## 从C盘迁移到非系统盘

1. 查看所有分发版本

```powershell
wsl -l --all  -v
```

![image-20220315105542588](wsl配置.assets/image-20220315105542588.png)

2. 导出分发版为tar文件到f盘

```powershell
wsl --export Ubuntu-20.04 f:\wsl2\ubuntu20.04.tar

wsl --export docker-desktop f:\wsl2\docker\docker-desktop.tar

wsl --export docker-desktop-data f:\wsl2\docker\docker-desktop-data.tar
```

3. 注销当前分发版

```powershell
wsl --unregister docker-desktop

wsl --unregister docker-desktop-data
```

4. 重新导入并安装分发版

```powershell
wsl --import Ubuntu20.04 f:\wsl2\ubuntu f:\wsl2\ubuntu20.04.tar --version 2

wsl --import docker-desktop f:\wsl2\docker\docker-desktop f:\wsl2\docker\docker-desktop.tar --version 2

wsl --import docker-desktop-data f:\wsl2\docker\docker-desktop-data f:\wsl2\docker\docker-desktop-data.tar --version 2
```

5. 设置该版本为默认版本

```powershell
wsl --set-default Ubuntu20.04
```

6. [默认用户为root, 修改默认用户为lynn(首先确定有这个用户)](https://superuser.com/questions/1566022/how-to-set-default-user-for-manually-installed-wsl-distro)

![image-20220315120420875](wsl配置.assets/image-20220315120420875.png)