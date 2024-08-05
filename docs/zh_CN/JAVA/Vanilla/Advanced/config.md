# server.properties

server.properties是储存多人游戏（Minecraft或Minecraft Classic）服务器所有设置的文件。

在编辑server.properties时，行之间的顺序可以打乱，但文件结构不能改变。每一行的等号之前的文本为变量名，你不应该修改这些内容。等号后面为变量的值，你可以按照规则自行编辑。以#开头的行为注释，添加、修改或移除注释行不会对游戏造成影响。

详见[server.properties - Minecraft Wiki](https://minecraft.fandom.com/zh/wiki/Server.properties)

::: tip

点击配置行以显示更多信息。

:::

<script setup>
import ConfigViewer from "/components/ConfigViewer.vue";
import { data } from "./server-propertie.data.mts";
</script>

<ConfigViewer :data=data name="server.propertie"/>
