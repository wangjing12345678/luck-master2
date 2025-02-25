<template>
  <div id="app">
    <el-container>
      <el-header class="header"> {{ title }}</el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <el-menu :default-active="activeName" class="el-menu-vertical-demo" :router="true">
            <template v-for="i in menu">
              <el-submenu :index="i.path" :key="i.name" v-if="i.children && i.children.length">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{ i.name }}</span>
                </template>
                <el-menu-item :index="x.path" v-for="x in i.children" :key="x.name">{{ x.name }}</el-menu-item>
              </el-submenu>
              <el-menu-item :index="i.path" v-else :key="i.name">
                <i class="el-icon-menu"></i>
                <span slot="title">{{ i.name }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-main class="content"> <router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // window.open('http://localhost:8080/#/dragPanel', 'baidu');
  },
  computed: {
    title() {
      return process.env.VUE_APP_TITLE;
    },
    menu() {
      return this.$router.options.routes;
    },
    activeName() {
      return this.$route.path;
    },
  },
  methods: {
    aa() {
      switch (1) {
        case 2:
          break;
      }
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
#app {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}
.aside {
  height: calc(100vh - 60px);
}
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.content {
  height: calc(100vh - 60px);
}
</style>
