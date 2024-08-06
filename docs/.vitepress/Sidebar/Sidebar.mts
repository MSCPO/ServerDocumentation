// ##### ####### #####
// ##### Sidebar #####
// ##### ####### #####
// 为了便于修改，文档采用模块化注册的方式快速引入Sidebar
// 在这里注册Sidebar

import VanillaSidebar from './JAVA/Vanilla'
import CuberiteSidebar from './JAVA/Cuberite'
import SpigotSidebar from './JAVA/SpigotSeries'
import ModSidebar from './JAVA/Mod'

export default {
    ...CuberiteSidebar,
    ...VanillaSidebar,
    ...SpigotSidebar,
    ...ModSidebar,
}
