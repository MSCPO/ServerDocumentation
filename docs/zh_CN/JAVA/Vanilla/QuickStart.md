# 快速开始

## 下载 Vanilla: 

1. 前往正版启动器手动选择版本下载
2. 前往第三方下载站下载（如GetBukkit:https://getbukkit.org/download/vanilla）

## 安装 Java 环境

运行 Vanilla 需要 Java。或许你已经安装了 Java，但你可能需要升级 Java 版本。

如果您的计算机运行 Windows 或 macOS 操作系统，您可以[Adaptithere](https://adoptium.net/zh-CN/temurin/releases/)下载OpenJDK。 Java 8、11和17都可在这里找到。

::: tip 常用的 Java 环境

- [Azul Zulu OpenJDK](https://www.azul.com/downloads/)（推荐）对于游戏优化方面，Zulu内存占用相对较小。
- [Dragonwell](https://github.com/dragonwell-project)（推荐）据说在运算上有优化。
- [Adaptithere](https://adoptium.net/zh-CN/temurin/releases/)
- [Microsoft Build of OpenJDK](https://learn.microsoft.com/zh-cn/java/openjdk/download) 不知道优化了什么
- [Oracle JDK](https://www.oracle.com/java/technologies/downloads/) 原汁原味（大雾
- [Red Hat build of OpenJDK](https://developers.redhat.com/products/openjdk/download) 我不知道为什么很多人都推荐这个，但是嘛我相信红帽[狗头]（需要账户）
- [Liberica JDK](https://bell-sw.com/pages/downloads/) Liberica JDK是一位代表接触的第一个除 Oracle JDK 以外的JDK
- [Semeru JDK](https://developer.ibm.com/languages/java/semeru-runtimes/downloads/) 使用了OpenJ9 VM降低JVM的内存占用和处理器占用

-------

版本说明：

Java 17 LTS 版本适用于 Minecraft 1.17-1.19.4 版本，Minecraft 1.17-1.17.1 默认 Java 版本是 16，Java 17 LTS 向下兼容。

Java 8 LTS 版本适用于 Minecraft 1.12-1.16.5 版本，Java 11 LTS 版本向下兼容。

:::

::: warning 你可能需要手动调整 Java 的路径

- 在 Profile（Advanced Options）中，依次找到 <档案名> -> Java-Executable（.../java.exe）
- 服务器使用全局 PATH 变量或者你指定的完整 Java 运行时的路径。

:::

## 启动服务器

::: details Windows
Shift + 右键服务器文件夹，单击“在此处打开命令窗口”

键入 `java -jar server.jar` 回车。

服务器将会启动。
:::

::: details Linux
打开终端

键入 `java -jar server.jar` 回车。

服务器将会启动。
:::

## 本教程引用了一些作者的文章

- [shaokeyibb/Minecraft-Server-Starting-Guide](https://github.com/shaokeyibb/Minecraft-Server-Starting-Guide)
