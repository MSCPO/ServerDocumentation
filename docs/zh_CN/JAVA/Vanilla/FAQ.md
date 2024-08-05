# 常见问题

此指南将帮助您快速解决问题。

## 登录时提示：`登录失败：无效会话（请尝试重启游戏及启动器）`

原因：服务器可能配置为正版服/外置登陆服，而客户端使用离线模式加入。

### 解决方法

如果是正版服，就请玩家登录正版账户后连接服务器。

如果是离线服，配置`server.properties`，找到`online-mode=true`，将`online-mode=true`改为`online-mode=false`以关闭登陆验证

``` server.properties{4}
max-players=20
online-mode=true // [!code focus]
enable-status=true
```

## 服务器没有皮肤

原因：服务器可能为离线服务器。

### 解决方法

在Vanilla端暂无，如果没有特殊需求建议换其他端。
