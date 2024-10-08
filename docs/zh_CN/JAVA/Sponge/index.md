# Sponge是什么？

Sponge 项目的目的是为 Minecraft（Java 版）提供一个插件开发框架。他是由社区支持的，并且它的开源属性使得任何人都得以参与。

大多数基于 SpongeAPI 的插件应能跨多个 Minecraft 版本使用而不用特别更新。即在大部分情况下，服主不需要担心插件不兼容的问题。

前往官方文档：[Sponge 开发文档](https://docs.spongepowered.org/stable/zh-CN/index.html)

## Sponge 家族

<!--@include: ./SpongeForge/index.md-->

----------

<!--@include: ./SpongeVanilla/index.md-->

## 常见问题

### Sponge为什么没有插件文件夹

原因：不看Wiki，为了安装插件，需将插件放到您游戏或服务器的 /mods/ 文件夹。教程：[【安装插件 - Sponge 8.0.0 文档】](https://docs.spongepowered.org/stable/zh-CN/server/management/plugins.html)

### 为什么不能使用`/op`命令

您可能安装了`LuckPerms`或者是`PermissionEX`权限管理插件，一旦启用了这个插件，`/op`命令将被禁用，请使用更灵活的LuckPerms/PermissionEX来接管权限管理吧！

::: warning
Minecraft 本身没有复杂的权限系统，仅有管理员的概念。管理员的权限等级非常高，应当仅赋予信任的玩家。复杂的权限管理可通过权限插件或者 MOD 来实现。Sponge 本身无权限管理功能。
:::

解决方法：

使用LuckPerms/PermissionEX来配置权限节点

## 特别鸣谢

- [Sponge 官方文档](https://docs.spongepowered.org/stable/zh-CN/index.html)
- [HanSiqi2008](https://github.com/HanSiqi2008) 文案编辑
- [MSCMDD](https://github.com/MSCMDD) 文案编辑
