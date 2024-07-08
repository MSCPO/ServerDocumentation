---
layout: wiki  # 使用wiki布局模板
wiki: MDD_Cuberite_Users_Manual # 这是项目名
title: 3.11 - GENERATOR
comment_id: /document/MDD_Cuberite_Users_Manual/3_CONFIGURING_WORLD_INI/
---
## 11 - GENERATOR

指定此世界的生成器设置。这是自定义世界时最强大的工具。

{% note 在修改此设置时，请注意已生成的世界与新生成的地形不会无缝连接。此外，请记住，使用其他生成器（例如香草端原版的生成器）创建的世界也无法无缝连接！
生成器的选择将极大地影响您之后的选择。 color:warning %}

{% note 这一部分还没有完全完成，因为其中有一些古老的生成代码。这需要进行更多的研究 - 12xx12 color:cyan %}

| 变量 | 描述 | 缺省值 |
| --- | --- | --- |
| Generator | 生成器：</br>- [Composable](/document/MDD_Cuberite_Users_Manual/3_CONFIGURING_WORLD_INI/3_11_Generator.html#COMPOSABLE-GENERATOR)</br>- Noise3D | Composable |

{% quot COMPOSABLE GENERATOR %}

### COMPOSABLE GENERATOR

COMPOSABLE GENERATOR（可组合生成器）是一个非常强大的工具。您可以混合和匹配不同的生成方法并对其进行自定义。
它提供了许多不同的选项供您选择：

| 变量 | 描述 | 缺省值 |
| --- | --- | --- |
| [BiomeGen](/document/mdd_cuberite_users_manual/3_configuring_world_ini/3_11_generator#BIOMEGEN) | 这个值将决定服务器选择生物群落的方式。 | Grown |
| [ShapeGen](/document/mdd_cuberite_users_manual/3_configuring_world_ini/3_11_generator#SHAPEGEN) | 这个值决定了世界的生成方式。 | BiomalNoise3D |
| [CompositionGen](/document/mdd_cuberite_users_manual/3_configuring_world_ini/3_11_generator#COMPOSITIONGEN) | 这决定了生成器填充实体方块的方式。 | Biomal |
| CompositionGenCacheSize |  | 64 |
| [Finishers](/document/MDD_Cuberite_Users_Manual/3_CONFIGURING_WORLD_INI/3_11_Generator.html#FINISHERS) |  | [Default Finishers](/document/MDD_Cuberite_Users_Manual/3_CONFIGURING_WORLD_INI/3_11_Generator.html#FINISHERS) |
|  |  |  |

{% quot BIOMEGEN %}

### BIOMEGEN

您可以在[此处](http://cuberite.xoft.cz/docs/Generator.html#biomegen)更深入地阅读有关不同方法的信息

| 模式 | 描述 |
| --- | --- |
| Constant | 常量生物群系生成器（只有一个生物群系）。</br>选项：{% folding ConstantBiome open:true %} 将确定生成的生物群系。请参阅可用生物群系列表，不包括前缀"bi"。 {% endfolding %} |
| Checkerboard | 将生成棋盘布局的生物群系。你可以设置棋盘方块的大小和使用的生物群落。</br>选项：{% folding CheckerBoardBiomes open:true %} 生物群系列表。用逗号分隔。</br>您可以选择为任何生物群系附加":%integer%"来设置频率。 {% endfolding %}{% folding CheckerboardBiomeSize open:true %} 棋盘方块的大小。 {% endfolding %} |
| Voronoi | 选项：{% folders %}<!-- folder VoronoiCellSize -->N/A<!-- folder VoronoiJitterSize -->N/A<!-- folder VoronoiOddRowOffset -->N/A{% endfolders %} |
| DistortedVoronoi | 选项：{% folders %}<!-- folder DistortedVoronoiCellSize -->N/A<!-- folder DistortedVoronoiBiomes -->N/A{% endfolders %} |
| TwoLevel | 选项：{% folders %}<!-- folder TwoLevelLargeCellSize -->N/A<!-- folder TwoLevelSmallCellSize -->N/A<!-- folder TwoLevelDistortXOctave1Freq -->N/A<!-- folder TwoLevelDistortXOctave1Amp -->N/A<!-- folder TwoLevelDistortXOctave2Freq -->N/A<!-- folder TwoLevelDistortXOctave2Amp -->N/A<!-- folder TwoLevelDistortXOctave3Amp -->N/A<!-- folder TwoLevelDistortZOctave1Freq -->N/A<!-- folder TwoLevelDistortZOctave1Amp -->N/A<!-- folder TwoLevelDistortZOctave2Freq -->N/A<!-- folder TwoLevelDistortZOctave2Amp -->N/A<!-- folder TwoLevelDistortZOctave3Freq -->N/A<!-- folder TwoLevelDistortZOctave3Amp -->N/A{% endfolders %} |
| MultiStepMap | 选项：{% folders %}<!-- folder MultiStepMapOceanCellSize -->N/A<!-- folder MultiStepMapMushroomIslandSize -->N/A<!-- folder MultiStepMapRiverCellSize -->N/A<!-- folder MultiStepMapRiverWidth -->N/A<!-- folder MultiStepMapLandBiomeSize -->N/A{% endfolders %} |
| GrownProt |  |
| Grown |  |

{% quot SHAPEGEN %}

### SHAPEGEN

Shape generator（形状生成器）决定了世界的形状。根据您的选择，它可以创建悬崖峭壁，也就是在顶部有两个方块面对空气的情况。

| 模式 | 描述 |
| --- | --- |
| BiomalNoise3D | 这个生成器通过将两个三维噪声的插值与垂直线性渐变相结合来生成地形形状。</br>选项：{% folders %}<!-- folder SeaLevel -->生成器生成的海平面可以通过调整其参数来控制。<!-- folder BiomalNoise3DFrequencyX -->N/A<!-- folder BiomalNoise3DFrequencyY -->N/A<!-- folder BiomalNoise3DFrequencyZ -->N/A<!-- folder BiomalNoise3DBaseFrequencyX -->N/A<!-- folder BiomalNoise3DBaseFrequencyZ -->N/A<!-- folder BiomalNoise3DChoiceFrequencyX -->N/A<!-- folder BiomalNoise3DChoiceFrequencyY -->N/A<!-- folder BiomalNoise3DChoiceFrequencyZ -->N/A<!-- folder BiomalNoise3DAirThreshold -->N/A<!-- folder BiomalNoise3DNumChoiceOctaves -->N/A<!-- folder BiomalNoise3DNumDensityOctaves -->N/A<!-- folder BiomalNoise3DNumBaseOctaves -->N/A<!-- folder BiomalNoise3DBaseAmplitude -->所有这些选项都将改变世界的面貌。</br>它们会影响随机性，</br>所以你不能100%确定它们会做什么。{% endfolders %} |
| BiomalNoise3D | 选项：{% folders %}<!-- folder SeaLevel -->生成器生成的海平面可以通过调整其参数来控制。<!-- folder DistortedHeightmapFrequencyX -->N/A<!-- folder DistortedHeightmapFrequencyY -->N/A<!-- folder DistortedHeightmapFrequencyZ -->N/A{% endfolders %} |
| End | 用于末地的形状生成器（ShapeGenerator）可以创建特定于末地的地形形状。 </br>选项：{% folders %}<!-- folder EndGenAirThresholdMainIsland -->N/A<!-- folder EndGenAirThresholdOtherIslands -->N/A<!-- folder EndGenMainIslandSize -->N/A<!-- folder EndGenBaseHeight -->N/A<!-- folder EndGenTerrainTopMultipler -->N/A<!-- folder EndGenTerrainBottomMultiptder -->N/A<!-- folder EndGenVoidOffsetNoiseMultiptder -->N/A<!-- folder EndGenFrequencyX -->N/A<!-- folder EndGenFrequencyY -->N/A<!-- folder EndGenFrequencyZ -->N/A{% endfolders %} |
| HeightMap | 这是一个古老的遗留问题。</br>服务器以前使用HeightGenerators而不是ShapeGenerators。</br>这种做法已经被弃用，不会产生任何悬崖或类似的地形特征。</br>这个属性名为"HeightGen"，</br>并启用了相应的功能。 |
| TwoHeights | 合并两个从相同选项生成的高度图 </br>选项：{% folders %}<!-- folder TwoHeightsFrequencyX -->N/A<!-- folder TwoHeightsFrequencyY -->N/A<!-- folder TwoHeightsFrequencyZ -->N/A{% endfolders %} |
| Noise3D | 选项：{% folders %}<!-- folder Noise3DHeightAmplification -->N/A<!-- folder Noise3DMidPoint -->N/A<!-- folder Noise3DFrequencyX -->N/A<!-- folder Noise3DFrequencyY -->N/A<!-- folder Noise3DFrequencyZ -->N/A<!-- folder Noise3DBaseFrequencyX -->N/A<!-- folder Noise3DBaseFrequencyY -->N/A<!-- folder Noise3DBaseFrequencyZ -->N/A<!-- folder Noise3DAirThreshold -->N/A<!-- folder Noise3DNumChoiceOctaves -->N/A<!-- folder Noise3DNumDensityOctaves -->N/A<!-- folder Noise3DNumBaseOctaves -->N/A<!-- folder Noise3DBaseAmplitude -->N/A{% endfolders %} |

Default: Biomal

{% quot HEIGHT MAP %}

### HEIGHT MAP

HeightMap形状生成器的设置决定了生成的高度地图的特征和特点。

| 生成器类型 | 生成结果 |
| --- | --- |
| Flat |  |
| Classic |  |
| MinMax |  |
| Mountains |  |
| Steppy |  |
| Biomal |  |

{% quot COMPOSITIONGEN %}

### COMPOSITIONGEN

| 生成器类型 | 生成结果 |
| --- | --- |
| Biomal |  |
| BiomalNoise3D |  |
| Classic |  |
| DebugBiomes |  |
| DistortedHeightmap |  |
| End |  |
| Nether |  |
| Noise3D |  |
| SameBlock | 用相同的块填充所有的东西。</br>Fills everything with the same Block. |

{% quot FINISHERS (修整器) %}

### FINISHERS

| 修整器类型 | 函数功能 | 选项 |
| --- | --- | --- |
| RoughRavines | 创建巨大的沟壑。 | {% mark RoughRavinesGridSize color:green %}</br>{% mark RoughRavinesMaxOffset color:green %}</br>{% mark RoughRavinesMaxSize color:green %}</br>{% mark RoughRavinesMinSize color:green %}</br>{% mark RoughRavinesMaxCenterWidth color:green %}</br>{% mark RoughRavinesMinCenterWidth color:green %}</br>{% mark RoughRavinesMaxRoughness color:green %}</br>{% mark RoughRavinesMinRoughness color:green %}</br>{% mark RoughRavinesMaxFloorHeightEdge color:green %}</br>{% mark RoughRavinesMinFloorHeightEdge color:green %}</br>{% mark RoughRavinesMaxFloorHeightCenter color:green %}</br>{% mark RoughRavinesMinFloorHeightCenter color:green %}</br>{% mark RoughRavinesMaxCeilingHeightEdge color:green %}</br>{% mark RoughRavinesMinCeilingHeightEdge color:green %}</br>{% mark RoughRavinesMaxCeilingHeightCenter color:green %}</br>{% mark RoughRavinesMinCeilingHeightCenter color:green %} |
| WormNestCaves | 创建穿过地面的小洞穴。 | {% mark WormNestCavesSize color:green %}</br>{% mark WormNestCavesGrid color:green %}</br>{% mark WormNestMaxOffset color:green %} |
| WaterLakes | 用于在海平面上</br>创建水域湖泊。 | {% mark WaterLakesProbability color:green %} |
| WaterSprings | 创建单方块的水源泉。 |  |
| LavaLakes | 创建海平面上的岩浆湖。 | {% mark LavaLakesProbability color:green %} |
| LavaSprings | 创建单方块的岩浆泉。 |  |
| OreNests | 在地下生成矿石。 |  |
| Mineshafts | 创建矿井。 | {% mark MineShaftsGridSize color:green %}</br>{% mark MineShaftsMaxOffset color:green %}</br>{% mark MineShaftsMaxSystemSize color:green %}</br>{% mark MineShaftsChanceCorridor color:green %}</br>{% mark MineShaftsChanceCrossing color:green %}</br>{% mark MineShaftsChanceStaircase color:green %} |
| Trees | 创建树木</br>（包括树状结构，如蘑菇）。 |  |
| Villages | 创建村庄。 | {% mark VillageGridSize color:green %}</br>{% mark VillageMaxOffset color:green %}</br>{% mark VillageMaxDepth color:green %}</br>{% mark VillageMaxSize color:green %}</br>{% mark VillageMinDensity color:green %}</br>{% mark VillageMaxDensity color:green %}</br>{% folding VillagePrefabs open:true color:green %}有多个村庄可供选择:</br>- AlchemistVillage</br>- JapaneseVillage</br>- PlainsVillage</br>- SandVillage</br>- SandFlatRoofVillage{% endfolding %} |
| SinglePieceStructures | 创建由单个方块组成的结构。 | 您可以选择:</br>JungleTemple</br>WitchHut</br>DesertPyramid</br>DesertWell</br>您可以通过添加</br>SinglePieceStructures:%YourChoices%</br>来选择这些选项，</br>并以{% mark “|” color:cyan %}分割</br>如果你想添加自定义模型</br>你需要在</br>Prefabs/SinglePieceStructures</br>文件夹中添加它们，并将</br>文件名添加到列表中</br>，不包括文件结尾。 |
| TallGrass | 在世界中添加高草和蕨类植物。 |  |
| SprinkleFoliage | 生成小花和类似方块。 |  |
| Ice | 在世界中添加冰块。 |  |
| Snow | 在世界中添加雪。 |  |
| Lilypads | 在世界中添加睡莲叶。 |  |
| BottomLava | 在世界中添加地壳岩浆。 | {% mark BottomLavaLevel color:green %} |
| DeadBushes |  |  |
| NaturalPatches |  |  |
| PreSimulator | 在进行点生成时，</br>计算不同块的行为而非手</br>动勾选，以提升性能。 | </br>PreSimulatorFallingBlocks=1</br>PreSimulatorWater=1</br>PreSimulatorLava=1 |
| Animals |  |  |
| OverworldClumpFlowers | 在末地生成花？！ |  |
