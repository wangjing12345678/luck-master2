<template>
  <div class="menu-container" :class="{ 'menu-horizontal': mode === 'horizontal' }">
    <ul class="menu-list" :class="menuClasses">
      <li
        v-for="item in items"
        :key="item.key"
        class="menu-item"
        :class="{
          'is-active': isActive(item.key),
          'is-disabled': item.disabled,
          'has-children': item.children
        }"
      >
        <!-- 菜单项主体 -->
        <div
          class="menu-item-content"
          @click="handleItemClick(item)"
          @mouseenter="handleMouseEnter(item)"
          @mouseleave="handleMouseLeave(item)"
        >
          <span v-if="item.icon" class="menu-item-icon">
            <component :is="item.icon" />
          </span>
          <span class="menu-item-label">{{ item.label }}</span>
          <span v-if="item.children" class="menu-item-arrow" :class="{ 'is-open': isOpen(item.key) }">
            <svg viewBox="0 0 24 24" width="12" height="12">
              <path
                fill="currentColor"
                d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
              />
            </svg>
          </span>
        </div>

        <!-- 子菜单 -->
        <transition name="submenu">
          <div
            v-if="item.children"
            v-show="isOpen(item.key)"
            class="submenu"
            :class="{ 'submenu-horizontal': mode === 'horizontal' }"
          >
            <ul class="submenu-list">
              <li
                v-for="child in item.children"
                :key="child.key"
                class="submenu-item"
                :class="{
                  'is-active': isActive(child.key),
                  'is-disabled': child.disabled
                }"
                @click.stop="handleItemClick(child)"
              >
                <span v-if="child.icon" class="menu-item-icon">
                  <component :is="child.icon" />
                </span>
                <span class="menu-item-label">{{ child.label }}</span>
              </li>
            </ul>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref, computed, watch } from 'vue'

export default defineComponent({
  name: 'Menu',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    mode: {
      type: String,
      default: 'vertical',
      validator: (value) => ['horizontal', 'vertical'].includes(value)
    },
    defaultSelectedKeys: {
      type: Array,
      default: () => []
    },
    defaultOpenKeys: {
      type: Array,
      default: () => []
    },
    theme: {
      type: String,
      default: 'light',
      validator: (value) => ['light', 'dark'].includes(value)
    }
  },

  emits: ['select', 'openChange'],

  setup(props, { emit }) {
    // 状态管理
    const selectedKeys = ref(props.defaultSelectedKeys)
    const openKeys = ref(props.defaultOpenKeys)
    const hoverKey = ref(null)

    // 计算属性
    const menuClasses = computed(() => ({
      'menu-vertical': props.mode === 'vertical',
      'menu-horizontal': props.mode === 'horizontal',
      'menu-dark': props.theme === 'dark'
    }))

    // 方法
    const isActive = (key) => selectedKeys.value.includes(key)
    const isOpen = (key) => openKeys.value.includes(key)

    const handleItemClick = (item) => {
      if (item.disabled) return

      if (item.children) {
        toggleSubmenu(item.key)
      } else {
        selectedKeys.value = [item.key]
        emit('select', item.key, item)
        item.onClick?.()
      }
    }

    const toggleSubmenu = (key) => {
      const index = openKeys.value.indexOf(key)
      if (index === -1) {
        openKeys.value.push(key)
      } else {
        openKeys.value.splice(index, 1)
      }
      emit('openChange', openKeys.value)
    }

    const handleMouseEnter = (item) => {
      if (props.mode === 'horizontal' && item.children) {
        hoverKey.value = item.key
        if (!isOpen(item.key)) {
          openKeys.value.push(item.key)
        }
      }
    }

    const handleMouseLeave = (item) => {
      if (props.mode === 'horizontal') {
        hoverKey.value = null
        if (isOpen(item.key)) {
          const index = openKeys.value.indexOf(item.key)
          openKeys.value.splice(index, 1)
        }
      }
    }

    // 监听主题变化
    watch(() => props.theme, (newTheme) => {
      document.documentElement.setAttribute('data-theme', newTheme)
    }, { immediate: true })

    return {
      selectedKeys,
      openKeys,
      menuClasses,
      isActive,
      isOpen,
      handleItemClick,
      handleMouseEnter,
      handleMouseLeave
    }
  }
})
</script>

<style lang="scss" scoped>
.menu-container {
  --menu-bg: #ffffff;
  --menu-color: #333333;
  --menu-active-color: #1890ff;
  --menu-hover-bg: #f5f5f5;
  --menu-disabled-color: #cccccc;
  --menu-border-color: #e8e8e8;
  --menu-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
  
  &[data-theme='dark'] {
    --menu-bg: #001529;
    --menu-color: rgba(255, 255, 255, 0.65);
    --menu-active-color: #1890ff;
    --menu-hover-bg: #002140;
    --menu-disabled-color: rgba(255, 255, 255, 0.25);
    --menu-border-color: #303030;
  }
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  background: var(--menu-bg);
  color: var(--menu-color);
  border-radius: 2px;
}

.menu-horizontal {
  display: flex;
  border-bottom: 1px solid var(--menu-border-color);

  .menu-item {
    display: inline-flex;
    border-bottom: 2px solid transparent;

    &.is-active {
      border-bottom-color: var(--menu-active-color);
    }
  }

  .submenu-horizontal {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 160px;
    background: var(--menu-bg);
    box-shadow: var(--menu-shadow);
    border-radius: 4px;
    z-index: 1000;
  }
}

.menu-item {
  position: relative;
  transition: all 0.3s ease;

  &-content {
    padding: 12px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
    user-select: none;

    &:hover {
      background: var(--menu-hover-bg);
    }
  }

  &.is-active {
    color: var(--menu-active-color);

    > .menu-item-content {
      background: var(--menu-hover-bg);
    }
  }

  &.is-disabled {
    color: var(--menu-disabled-color);
    cursor: not-allowed;
    pointer-events: none;
  }
}

.menu-item-icon {
  margin-right: 10px;
  display: inline-flex;
  align-items: center;
}

.menu-item-label {
  flex: 1;
}

.menu-item-arrow {
  margin-left: 8px;
  transition: transform 0.3s;

  &.is-open {
    transform: rotate(180deg);
  }
}

.submenu {
  background: var(--menu-bg);

  &-list {
    list-style: none;
    margin: 0;
    padding: 4px 0;
  }
}

.submenu-item {
  padding: 8px 20px;
  padding-left: 40px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;

  &:hover {
    background: var(--menu-hover-bg);
  }

  &.is-active {
    color: var(--menu-active-color);
    background: var(--menu-hover-bg);
  }

  &.is-disabled {
    color: var(--menu-disabled-color);
    cursor: not-allowed;
    pointer-events: none;
  }
}

// 动画
.submenu-enter-active,
.submenu-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.submenu-enter-from,
.submenu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style> 