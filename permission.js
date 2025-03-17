import router from "@/router/index.js";
import store from "@/store/index.js";
// 动态路由
router.beforeEach(async (to, from, next) => {
  const routeObj = router.options.routes.find((x) => x.name == "scrolltoend2");
  // console.log(routeObj);
  const arr = store.state.savePageRoute;
  // console.log(to);
  // console.log(router.options.routes);
  // const currentRoute = router.options.routes.find((x) => x.path == to.path);
  // console.log(currentRoute);
  if (!arr.find((x) => x.name == to.name)) {
    arr.push({ name: to.name, fullPath: to.fullPath });
  }
  if (!routeObj) {
    router.addRoute({ path: "/scrolltoend2", name: "scrolltoend2", component: () => import("@/views/scrolltoend/index2.vue") });
    router.options.routes.push({ path: "/scrolltoend2", name: "scrolltoend2", component: () => import("@/views/scrolltoend/index2.vue") });

    store.commit("setSavePageRoute", arr);
    next({ ...to, replace: true });
  } else {
    // arr.push({ name: to.name, fullPath: to.fullPath });

    store.commit("setSavePageRoute", arr);
    next();
  }
});
