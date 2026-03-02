# server.properties

server.properties是储存BDS所有设置的文件。

在编辑server.properties时，行之间的顺序可以打乱，但文件结构不能改变。每一行的等号之前的文本为变量名，你不应该修改这些内容。等号后面为变量的值，你可以按照规则自行编辑。以#开头的行为注释，添加、修改或移除注释行不会对游戏造成影响。

详见[服务端配置文件格式](https://zh.minecraft.wiki/w/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F)

非常感谢[Bedrock Dedicated Server 服务器配置文件 server.properties 汉化详解](https://www.minebbs.com/threads/bedrock-dedicated-server-server-properties.32021/)提供了丰富的汉化内容

::: tip

点击配置行以显示更多信息。

:::

<script setup>
import ConfigViewer from "/docs/components/ConfigViewer.vue";
import { data } from "./server-properties.data.mts";
</script>

<ConfigViewer :data=data name="server.properties"/>
