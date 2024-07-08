---
layout: wiki  # 使用wiki布局模板
wiki: MDD_Cuberite_Users_Manual # 这是项目名
title: 3.4 - SPAWNPOSITION
comment_id: /document/MDD_Cuberite_Users_Manual/3_CONFIGURING_WORLD_INI/
---
## 4 - SPAWNPOSITION

指定新玩家的出生点。坐标是绝对的，以块为单位，也可以是小数。如果缺少任何值，Cuberite提供默认值。

### 可选选项

| 变量 | 定义 | 缺省值 |
| --- | --- | --- |
| MaxViewDistance | 设置客户端的最大可视距离。</br>降低此值可在性能较弱或玩家数</br>过多的服务器上获得更好的性能。 | 1 |
| X | 出生点的X坐标 | 0 |
| Y | 出生点的Y坐标 | 点(X, Z)处地形的高度 |
| Z | 出生点的Z坐标 | 0 |
| PregenerateDistance | 初始世界生成时生成的每个方向的区块数。</br>Number of chunks in each direction that are</br>generated on initial world generation. | release为20。Debug为9。 |
