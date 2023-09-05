import Vue from "vue";
import vueRouter from "vue-router";
import App  from '@/App'

Vue.use(vueRouter);


export default new vueRouter({
  // mode:'history',
  routes: [
    {
      path: "/",
      component: () => import("@/views/luckEnd/raffle"),
      name: "raffle",
      meta: { title: "抽奖" },
    },
    {
      path: "/keep",
      component: () => import("@/views/keepalive/index.vue"),
      name: "keepalive",
      meta: { title: "1212" },
      children: [
        {
          path: "index1",
          name: "index1",
          component: () => import("@/views/testAlive/index1"),
          meta: { title: "index1", icon: "user", code: "permission.user" },
        },
        {
          path: "index2",
          name: "index2",
          component: () => import("@/views/testAlive/index2"),
          meta: { title: "index2", icon: "tree", code: "permission.role" },
        },
      ],
    },
    {
      path: "/histdssds",
      component: () => import("@/views/testHistory/his1"),
      name: "his1",
      meta: { title: "1212" },
    },
    {
      path: "/fdfdfdfdf",
      component: () => import("@/views/testHistory/his2"),
      name: "his2",
      meta: { title: "1212" },
    },
    {
      path: "/testRem",
      component: () => import("@/views/testRem"),
      name: "testRem",
      meta: { title: "1212" },
    },
    {
      path: "/testvideo",
      component: () => import("@/views/testvideo"),
      name: "testvideo",
      meta: { title: "1212" },
    },
    {
      path: "/testCheckBox",
      component: () => import("@/views/testCheckBox"),
      name: "testCheckBox",
      meta: { title: "1212" },
    },
    {
      path: "/testMap",
      component: () => import("@/views/testMap"),
      name: "testMap",
      meta: { title: "1212" },
    },
    {
      path: "/testRender",
      component: () => import("@/views/testRender"),
      name: "testRender",
      meta: { title: "1212" },
    },
    {
      path: "/testExcel",
      component: () => import("@/views/testExcel"),
      name: "testExcel",
      meta: { title: "1212" },
    },
    {
      path: "/renderTable",
      component: () => import("@/views/testRender/renderTable"),
      name: "renderTable",
      meta: { title: "1212" },
    },
    {
      path: "/mapsjs",
      component: () => import("@/views/mapsjs/index"),
      name: "mapsjs",
      meta: { title: "1212" },
    },
    {
      path: "/testTransfer",
      component: () => import("@/views/testTransfer/index"),
      name: "testTransfer",
      meta: { title: "1212" },
    },
    {
      path: "/testMenuKeepalive",
      component: () => import("@/views/testMenuKeepalive/index"),
      name: "testMenuKeepalive",
      meta: { title: "1212" },
    },
    // 表格空间自适应
    {
      path: "/tableLayout",
      component: () => import("@/views/tableLayout/index"),
      name: "tableLayout",
      meta: { title: "1212" },
    },
    // 拖拽实例
    {
      path: "/dragPanel",
      component: () => import("@/views/dragPanel/index"),
      name: "dragPanel",
      meta: { title: "1212" },
    },
    {
      path: "/dragPanelTest",
      component: () => import("@/views/dragPanel/test"),
      name: "dragPanelTest",
      meta: { title: "1212" },
    },
    {
      path: "/renderInput",
      component: () => import("@/views/renderInput/testRenderInput"),
      name: "renderInput",
      meta: { title: "1212" },
    },
    {
      path: "/testTouChuan",
      component: () => import("@/views/testTouChuan/index"),
      name: "testTouChuan",
      meta: { title: "1212" },
    },
    {
      path: "/testProxy",
      component: () => import("@/views/testProxy/index"),
      name: "testTouChuan",
      meta: { title: "1212" },
    },
    {
      path: "/testPatch",
      component: () => import("@/views/testPatch/changeOri.vue"),
      name: "testPatch",
      meta: { title: "1212" },
    },
    {
      path: "/websocket",
      component: () => import("@/views/websocket/websocket.vue"),
      name: "websocket",
      meta: { title: "1212" },
    },
    {
      path: "/commonAll",
      component: App,
      children: [
        {
          path: "networkState",
          name: "networkState",
          component: () => import("@/views/networkState.vue"),
        },
      ],
    },
    {
      path: "/iframe",
      component: () => import("@/views/iframe/main.vue"),
      name: "iframe",
      meta: { title: "1212" },
    },
    {
      path: "/iframe/son",
      component: () => import("@/views/iframe/son.vue"),
      name: "iframeSon",
      meta: { title: "1212" },
    },
    {
      path: "/tinymce",
      component: () => import("@/views/tinymce"),
      name: "tinymce",
      meta: { title: "1212" },
    },
    {
      path: "/creatFile",
      component: () => import("@/views/creatFile"),
      name: "creatFile",
      meta: { title: "1212" },
    },
    {
      path: "/testReg",
      component: () => import("@/views/testReg/testReg"),
      name: "testReg",
      meta: { title: "1212" },
    },
    {
      path: "/testEharts",
      component: () => import("@/views/testEharts/index.vue"),
      name: "testEharts",
      meta: { title: "1212" },
    },

    
  ],
});
