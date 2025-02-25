<template>
  <div>
    <div v-if="sourceInfo.referrer">
      来自: {{ sourceInfo.referrer }}
    </div>
    <div v-else>
      直接访问
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sourceInfo: {}
    }
  },
  
  created() {
    // 1. 使用 referrer
    this.sourceInfo.referrer = document.referrer;
    
    // 2. 路由参数
    this.sourceInfo.fromRoute = this.$route.query.from;
    
    // 3. 路由历史
    this.sourceInfo.previousRoute = this.$router.options?.history?.state.back;
  },
  
  methods: {
    checkSource() {
      if (document.referrer) {
        // 处理来源页面
        this.handleReferrer(document.referrer);
      } else if (this.$route.query.from) {
        // 处理路由参数
        this.handleRouteParam(this.$route.query.from);
      } else {
        // 直接访问
        this.handleDirectAccess();
      }
    },
    
    handleReferrer(referrer) {
      // 处理来源页面逻辑
    },
    
    handleRouteParam(from) {
      // 处理路由参数逻辑
    },
    
    handleDirectAccess() {
      // 处理直接访问逻辑
    }
  }
}
</script>
