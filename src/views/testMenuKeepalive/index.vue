<template>
    <div>
        <el-row type="flex">
            <el-col :span="8">
                <h5>迷你尺寸</h5>
                <el-menu
                        default-active="1"
                        :collapse="isMenuCollapsed"
                        size="mini"
                        @open="handleOpen"
                        @select="handleSelect"
                        @close="handleClose"
                >
                    <el-menu-item index="1">
                        <template slot="title">
                            <i class="hi-icon-todo"></i>
                            <span slot="title">一级菜单1</span>
                        </template>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="hi-icon-processing"></i>
                            <span>一级菜单2</span>
                        </template>
                        <el-menu-item index="2-1">二级菜单1</el-menu-item>
                        <el-menu-item index="2-2">二级菜单2</el-menu-item>
                        <el-menu-item index="2-3">二级菜单3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">二级菜单4</template>
                            <el-menu-item index="2-4-1">三级菜单1</el-menu-item>
                            <el-menu-item index="2-4-2">三级菜单2</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="hi-icon-finished"></i>
                            <span>一级菜单3</span>
                        </template>
                        <el-menu-item index="3-1">二级菜单1</el-menu-item>
                        <el-menu-item index="3-2">二级菜单2</el-menu-item>
                        <el-menu-item index="3-3">二级菜单3</el-menu-item>
                        <el-submenu index="3-4">
                            <template slot="title">二级菜单4</template>
                            <el-menu-item index="3-4-1">三级菜单1</el-menu-item>
                            <el-menu-item index="3-4-2">三级菜单2</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="hi-icon-document"></i>
                            <span>一级菜单4</span>
                        </template>
                        <el-menu-item index="4-1">二级菜单1</el-menu-item>
                        <el-menu-item index="4-2">二级菜单2</el-menu-item>
                        <el-menu-item index="4-3">二级菜单3</el-menu-item>
                        <el-submenu index="41-4">
                            <template slot="title">二级菜单4</template>
                            <el-menu-item index="4-4-1">三级菜单1</el-menu-item>
                            <el-menu-item index="4-4-2">三级菜单2</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="hi-icon-report-forms"></i>
                            <span>一级菜单5</span>
                        </template>
                        <el-menu-item index="5-1">二级菜单1</el-menu-item>
                        <el-menu-item index="5-2">二级菜单2</el-menu-item>
                        <el-menu-item index="5-3">二级菜单3</el-menu-item>
                        <el-submenu index="5-4">
                            <template slot="title">二级菜单4</template>
                            <el-menu-item index="5-4-1">三级菜单1</el-menu-item>
                            <el-menu-item index="5-4-2">三级菜单2</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="hi-icon-search-text"></i>
                            <span>一级菜单6</span>
                        </template>
                        <el-menu-item index="6-1">二级菜单1</el-menu-item>
                        <el-menu-item index="6-2">二级菜单2</el-menu-item>
                        <el-menu-item index="6-3">二级菜单3</el-menu-item>
                        <el-submenu index="6-4">
                            <template slot="title">二级菜单4</template>
                            <el-menu-item index="6-4-1">三级菜单1</el-menu-item>
                            <el-menu-item index="6-4-2">三级菜单2</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="hi-icon-history"></i>
                            <span>一级菜单7</span>
                        </template>
                        <el-menu-item index="7-1">二级菜单1</el-menu-item>
                        <el-menu-item index="7-2">二级菜单2</el-menu-item>
                        <el-menu-item index="7-3">二级菜单3</el-menu-item>
                        <el-submenu index="7-4">
                            <template slot="title">二级菜单4</template>
                            <el-menu-item index="7-4-1">三级菜单1</el-menu-item>
                            <el-menu-item index="7-4-2">三级菜单2</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="8">
                        <template slot="title">
                            <i class="hi-icon-help"></i>
                            <span>一级菜单8</span>
                        </template>
                        <el-menu-item index="8-1">二级菜单1</el-menu-item>
                        <el-menu-item index="8-2">二级菜单2</el-menu-item>
                        <el-menu-item index="8-3">二级菜单3</el-menu-item>
                        <el-submenu index="8-4">
                            <template slot="title">二级菜单4</template>
                            <el-menu-item index="8-4-1">三级菜单1</el-menu-item>
                            <el-menu-item index="8-4-2">三级菜单2</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
        <div>
            <keep-alive>
                <index1 v-if="currentIndex == '2-1'"></index1>
                <index2 v-else></index2>
                <!--<input type="text" v-model="aa" v-if="currentIndex == '2-1' ">-->
                <!--<input type="text" v-model="bb" v-else>-->
            </keep-alive>
        </div>
    </div>
</template>
<script>
    import index1 from '../testAlive/index1'
    import index2 from '../testAlive/index2'

    export default {
        data() {
            return {
                isMenuCollapsed: false,
                aa: '',
                bb: '',
                currentIndex: ''
            };
        },
        components: {
            index1,
            index2
        },

        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },

            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleSelect(key, keyPath) {
                this.currentIndex = key
                console.log(key, keyPath);
            },
        },
    };
</script>
