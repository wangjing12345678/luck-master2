<template>
  <div id="app" @click="canclePop">
    <el-container>
      <el-header class="header"> {{ title }}</el-header>
      <!-- {{ savePageRoute }} -->
      <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
        <el-tab-pane :key="item.name" v-for="(item, index) in savePageRoute" :label="item.name" :name="item.name" class="pane-aaa">
          <span slot="label" class="label-aaa" @contextmenu.prevent="(e) => handleRightClick(e, index)" @click="toPage(index)">
            <div class="aaaa" v-if="hihtLightIndex == index">
              <div @click.stop="closePage(1)">关闭当前</div>
              <div @click.stop="closePage(2)">关闭左侧</div>
              <div @click.stop="closePage(3)">关闭右侧</div>
              <div @click.stop="closePage(4)">关闭其他</div>
              <!-- <div @click.stop="closePage(5)">全部关闭</div> -->
            </div>
            {{ item.name }}</span
          >
        </el-tab-pane>
      </el-tabs>
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
import { mapState } from "vuex";
export default {
  name: "App",
  mounted() {
    // window.open('http://localhost:8080/#/dragPanel', 'baidu');
  },

  data() {
    return {
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
      ],
      tabIndex: 2,
      hihtLightIndex: -1,
    };
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
    ...mapState({
      savePageRoute: (state) => state.savePageRoute,
    }),
  },
  watch: {
    $route: {
      handler(nVal) {
        this.editableTabsValue = nVal.name;
      },
      immediate: true,
    },
  },
  methods: {
    toPage(index) {
      this.editableTabsValue = this.savePageRoute[index].name;
      if (this.$route.name != this.editableTabsValue) {
        this.$router.push({ name: this.editableTabsValue });
      }
    },
    aa() {
      switch (1) {
        case 2:
          break;
      }
    },
    closePage(type) {
      let arr = this.savePageRoute;
      console.log(this.$route);
      if (type == 1) {
        if (this.hihtLightIndex < 1) {
          return;
        }
        this.editableTabsValue = this.hihtLightIndex >= 1 ? this.savePageRoute[this.hihtLightIndex - 1].name : "";
        if (this.$route.name != this.editableTabsValue) {
          this.$router.push({ name: this.editableTabsValue });
        }
        arr.splice(this.hihtLightIndex, 1);
        this.$store.commit("setSavePageRoute", arr);
      } else if (type == 2) {
        if (this.hihtLightIndex < 1) {
          return;
        }
        this.editableTabsValue = this.savePageRoute[this.hihtLightIndex].name;
        arr.splice(this.hihtLightIndex - 1, 1);
        this.$store.commit("setSavePageRoute", arr);
        if (this.$route.name != this.editableTabsValue) {
          this.$router.push({ name: this.editableTabsValue });
        }
      } else if (type == 3) {
        if (this.hihtLightIndex == arr.length - 1) {
          return;
        }
        this.editableTabsValue = this.savePageRoute[this.hihtLightIndex].name;
        arr.splice(this.hihtLightIndex + 1, 1);
        this.$store.commit("setSavePageRoute", arr);
        if (this.$route.name != this.editableTabsValue) {
          this.$router.push({ name: this.editableTabsValue });
        }
      } else if (type == 4) {
        const current = arr.slice(this.hihtLightIndex, this.hihtLightIndex + 1);
        this.editableTabsValue = current[0].name;
        this.$store.commit("setSavePageRoute", current);
        if (this.$route.name != this.editableTabsValue) {
          this.$router.push({ name: this.editableTabsValue });
        }
      } else if (type == 5) {
        console.log(type);
      }
      this.hihtLightIndex = -1;
    },
    canclePop() {
      this.hihtLightIndex = -1;
    },
    handleRightClick(e, index) {
      e.preventDefault(); //阻止右键默认行为
      this.hihtLightIndex = index;
      console.log("pppp");
    },
    handleTabsEdit(targetName, action) {
      if (action === "remove") {
        const index = this.savePageRoute.findIndex((x) => x.name == targetName);
        this.editableTabsValue = index >= 1 ? this.savePageRoute[index - 1].name : "";
        let arr = this.savePageRoute;
        arr.splice(index, 1);
        this.$store.commit("setSavePageRoute", arr);
        this.$router.push({ name: this.editableTabsValue });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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

.pane-aaa {
  position: relative;
  .pop {
    position: absolute;
  }
}
.label-aaa {
  position: relative;
  .aaaa {
    position: absolute;
    width: 80px;
    // height: 100px;
    right: -124px;
    background: red;
    top: -10px;
    z-index: 99;
    padding: 0 10px;
  }
}
::v-deep .el-tabs__nav-wrap {
  overflow: unset;
}
::v-deep .el-tabs__nav-scroll {
  overflow: unset;
}
</style>
