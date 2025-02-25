import router from "@/router/index.js";
// 动态路由
router.beforeEach(async (to, from, next) => {
  const routeObj = router.options.routes.find((x) => x.name == "scrolltoend2");
  console.log(routeObj);
  if (!routeObj) {
    router.addRoute({ path: "/scrolltoend2", name: "scrolltoend2", component: () => import("@/views/scrolltoend/index2.vue") });
    router.options.routes.push({ path: "/scrolltoend2", name: "scrolltoend2", component: () => import("@/views/scrolltoend/index2.vue") });
    next({ ...to, replace: true });
  } else {
    next();
  }
});
