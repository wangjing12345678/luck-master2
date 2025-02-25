<template>
  <div class="container">
    <!-- 左侧列表 -->
    <div 
      class="left-container" 
      ref="leftContainer"
      @scroll="throttledScroll"
    >
      <div 
        v-for="(section, index) in sections" 
        :key="index"
        :ref="el => setSectionRef(el, index)"
        :id="`section-${index}`"
        class="section"
      >
        <h2 class="section-title">{{ section.title }}</h2>
        <div class="section-content">
          {{ section.content }}
        </div>
      </div>
    </div>

    <!-- 右侧导航 -->
    <div class="right-nav">
      <div 
        v-for="(section, index) in sections" 
        :key="index"
        :class="[
          'nav-item',
          { 
            'active': currentIndex === index,
            'visible': visibleSections.includes(index)
          }
        ]"
        @click="scrollToSection(index)"
      >
        {{ section.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { throttle } from 'lodash-es';

export default {
  name: 'ScrollNav',
  
  data() {
    return {
      sections: [
        { title: '部分1', content: '内容1' },
        { title: '部分2', content: '内容2' },
        { title: '部分3', content: '内容3' },
        // ... 更多数据
      ],
      currentIndex: 0,
      visibleSections: [],
      sectionRefs: [],
      scrolling: false,
      observer: null
    }
  },
  
  created() {
    // 创建节流的滚动处理函数
    this.throttledScroll = throttle(this.handleScroll, 100);
  },
  
  mounted() {
    this.$nextTick(() => {
    //   this.initIntersectionObserver();
      this.calculateSectionPositions();
      
      // 监听窗口大小变化
      window.addEventListener('resize', this.handleResize);
    });
  },
  
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('resize', this.handleResize);
    this.throttledScroll.cancel();
  },
  
  methods: {
    // 设置section引用
    setSectionRef(el, index) {
      if (el) {
        this.sectionRefs[index] = el;
      }
    },
    
    // 初始化交叉观察器
    initIntersectionObserver() {
      const options = {
        root: this.$refs.leftContainer,
        threshold: [0, 0.5, 1],
        rootMargin: '-10% 0px -10% 0px'
      };
      
      this.observer = new IntersectionObserver((entries) => {
        console.log(entries);
        if (this.scrolling) return;
        
        const visibleSections = [];
        
        entries.forEach(entry => {
          const index = this.sectionRefs.findIndex(el => el === entry.target);
          
          if (entry.isIntersecting) {
            visibleSections.push(index);
          }
        });
        
        if (visibleSections.length) {
          this.visibleSections = visibleSections;
          this.currentIndex = visibleSections[0];
        }
      }, options);
      
      this.sectionRefs.forEach(el => {
        if (el) this.observer.observe(el);
      });
    },
    
    // 计算各部分位置
    calculateSectionPositions() {
      this.sectionPositions = this.sectionRefs.map(el => ({
        top: el.offsetTop,
        height: el.offsetHeight
      }));
    },
    
    // 处理滚动
    handleScroll() {
      if (this.scrolling) return;
      
      const container = this.$refs.leftContainer;
      const scrollTop = container.scrollTop;
      
      // 找到当前可见的部分
      const index = this.sectionPositions.findIndex(
        ({ top, height }) => 
          scrollTop >= top - 100 && 
          scrollTop < top + height - 100
      );
      
      if (index !== -1) {
        this.currentIndex = index;
      }
    },
    
    // 滚动到指定部分
    scrollToSection(index) {
      this.scrolling = true;
      this.currentIndex = index;
      
      this.sectionRefs[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      setTimeout(() => {
        this.scrolling = false;
      }, 1000);
    },
    
    // 处理窗口大小变化
    handleResize: throttle(function() {
      this.calculateSectionPositions();
    }, 200)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  height: calc(100vh - 100px);
  overflow: hidden;
}

.left-container {
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.section {
  height: 800px;
  margin-bottom: 30px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  margin-bottom: 16px;
  font-weight: bold;
}

.right-nav {
  width: 120px;
  padding: 20px 10px;
  background: #f8f9fa;
  overflow-y: auto;
}

.nav-item {
  padding: 12px 16px;
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background: #e9ecef;
}

.nav-item.active {
  color: #fff;
  background: #1890ff;
  font-weight: 500;
}

.nav-item.visible {
  color: #1890ff;
}

/* 自定义滚动条样式 */
.left-container::-webkit-scrollbar {
  width: 6px;
}

.left-container::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

.left-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}
</style>