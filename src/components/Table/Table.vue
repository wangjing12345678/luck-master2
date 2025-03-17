<template>
  <div class="table-container">
    <!-- 表格头部工具栏 -->
    <div class="table-toolbar" v-if="showToolbar">
      <div class="table-title" v-if="title">{{ title }}</div>
      <div class="table-actions">
        <slot name="toolbar"></slot>
      </div>
    </div>

    <!-- 表格主体 -->
    <div class="table-main" :class="{ 'table-loading': loading }">
      <div class="table-content">
        <table class="table">
          <thead>
            <tr>
              <!-- 选择列 -->
              <th v-if="selectable" class="selection-column">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    :checked="isAllSelected"
                    :indeterminate="isIndeterminate"
                    @change="handleSelectAll"
                  />
                </label>
              </th>
              <!-- 数据列 -->
              <th
                v-for="column in columns"
                :key="column.key"
                :class="[
                  column.sortable ? 'sortable' : '',
                  column.fixed ? \`fixed-\${column.fixed}\` : ''
                ]"
                :style="getColumnStyle(column)"
                @click="handleSort(column)"
              >
                <div class="column-title">
                  {{ column.title }}
                  <span v-if="column.sortable" class="sort-icon">
                    <svg viewBox="0 0 1024 1024" width="12" height="12">
                      <path
                        :class="{ active: sortField === column.key && sortOrder === 'asc' }"
                        d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
                      />
                    </svg>
                  </span>
                </div>
                <div v-if="column.filterable" class="column-filter">
                  <button @click.stop="toggleFilter(column)">
                    <svg viewBox="0 0 1024 1024" width="12" height="12">
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM368 744c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v464zm192-280c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v184zm192 72c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v256z"/>
                    </svg>
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, index) in displayData"
              :key="getRowKey(row)"
              :class="{ 'row-selected': selectedRows.includes(getRowKey(row)) }"
              @click="handleRowClick(row)"
            >
              <td v-if="selectable" class="selection-column">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    :checked="selectedRows.includes(getRowKey(row))"
                    @change="handleSelect(row)"
                  />
                </label>
              </td>
              <td
                v-for="column in columns"
                :key="column.key"
                :class="[column.fixed ? \`fixed-\${column.fixed}\` : '']"
                :style="getColumnStyle(column)"
              >
                <template v-if="column.render">
                  <component
                    :is="column.render"
                    :row="row"
                    :index="index"
                    :column="column"
                  ></component>
                </template>
                <template v-else>
                  {{ row[column.key] }}
                </template>
              </td>
            </tr>
            <tr v-if="!displayData.length" class="empty-row">
              <td :colspan="columns.length + (selectable ? 1 : 0)">
                <div class="empty-content">
                  <slot name="empty">
                    <span>暂无数据</span>
                  </slot>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 加载状态 -->
      <div v-if="loading" class="loading-mask">
        <div class="loading-spinner"></div>
      </div>
    </div>

    <!-- 分页器 -->
    <div v-if="showPagination" class="table-pagination">
      <div class="pagination-info">
        共 {{ total }} 条
      </div>
      <div class="pagination-content">
        <button
          class="pagination-btn"
          :disabled="currentPage === 1"
          @click="handlePageChange(currentPage - 1)"
        >
          上一页
        </button>
        <span class="pagination-current">第 {{ currentPage }} 页</span>
        <button
          class="pagination-btn"
          :disabled="currentPage === totalPages"
          @click="handlePageChange(currentPage + 1)"
        >
          下一页
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, watch } from 'vue'

export default defineComponent({
  name: 'Table',
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      default: () => []
    },
    rowKey: {
      type: [String, Function],
      default: 'id'
    },
    title: String,
    loading: Boolean,
    selectable: Boolean,
    showToolbar: {
      type: Boolean,
      default: true
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },

  emits: ['select', 'sort', 'filter', 'row-click', 'page-change'],

  setup(props, { emit }) {
    // 状态管理
    const selectedRows = ref([])
    const sortField = ref('')
    const sortOrder = ref('')
    const filterConditions = ref({})
    const currentPage = ref(1)

    // 计算属性
    const displayData = computed(() => {
      let result = [...props.data]

      // 排序
      if (sortField.value && sortOrder.value) {
        result.sort((a, b) => {
          const aValue = a[sortField.value]
          const bValue = b[sortField.value]
          return sortOrder.value === 'asc'
            ? aValue > bValue ? 1 : -1
            : aValue < bValue ? 1 : -1
        })
      }

      // 筛选
      Object.entries(filterConditions.value).forEach(([key, value]) => {
        if (value) {
          result = result.filter(item => {
            const itemValue = item[key]
            return itemValue && itemValue.toString().includes(value)
          })
        }
      })

      // 分页
      if (props.showPagination) {
        const start = (currentPage.value - 1) * props.pageSize
        result = result.slice(start, start + props.pageSize)
      }

      return result
    })

    const total = computed(() => props.data.length)
    const totalPages = computed(() => Math.ceil(total.value / props.pageSize))

    const isAllSelected = computed(() => {
      return displayData.value.length > 0 &&
        displayData.value.every(row => selectedRows.value.includes(getRowKey(row)))
    })

    const isIndeterminate = computed(() => {
      return displayData.value.some(row => selectedRows.value.includes(getRowKey(row))) &&
        !isAllSelected.value
    })

    // 方法
    const getRowKey = (row) => {
      return typeof props.rowKey === 'function'
        ? props.rowKey(row)
        : row[props.rowKey]
    }

    const handleSelectAll = (e) => {
      const checked = e.target.checked
      const keys = checked
        ? displayData.value.map(row => getRowKey(row))
        : []
      selectedRows.value = keys
      emit('select', keys)
    }

    const handleSelect = (row) => {
      const key = getRowKey(row)
      const index = selectedRows.value.indexOf(key)
      if (index === -1) {
        selectedRows.value.push(key)
      } else {
        selectedRows.value.splice(index, 1)
      }
      emit('select', selectedRows.value)
    }

    const handleSort = (column) => {
      if (!column.sortable) return

      if (sortField.value === column.key) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
      } else {
        sortField.value = column.key
        sortOrder.value = 'asc'
      }

      emit('sort', { field: sortField.value, order: sortOrder.value })
    }

    const toggleFilter = (column) => {
      const value = prompt(\`请输入\${column.title}的筛选条件：\`)
      if (value !== null) {
        filterConditions.value = {
          ...filterConditions.value,
          [column.key]: value
        }
        emit('filter', filterConditions.value)
      }
    }

    const handleRowClick = (row) => {
      emit('row-click', row)
    }

    const handlePageChange = (page) => {
      if (page < 1 || page > totalPages.value) return
      currentPage.value = page
      emit('page-change', page)
    }

    const getColumnStyle = (column) => {
      const style = {}
      if (column.width) {
        style.width = typeof column.width === 'number'
          ? \`\${column.width}px\`
          : column.width
      }
      if (column.fixed) {
        style.position = 'sticky'
        style[column.fixed] = 0
      }
      return style
    }

    // 监听数据变化
    watch(() => props.data, () => {
      currentPage.value = 1
      selectedRows.value = []
    })

    return {
      selectedRows,
      sortField,
      sortOrder,
      currentPage,
      displayData,
      total,
      totalPages,
      isAllSelected,
      isIndeterminate,
      getRowKey,
      handleSelectAll,
      handleSelect,
      handleSort,
      toggleFilter,
      handleRowClick,
      handlePageChange,
      getColumnStyle
    }
  }
})
</script>

<style lang="scss" scoped>
.table-container {
  --table-border-color: #e8e8e8;
  --table-header-bg: #fafafa;
  --table-row-hover-bg: #f5f5f5;
  --table-selected-row-bg: #e6f7ff;
  --table-text-color: #333333;
  --table-font-size: 14px;

  border: 1px solid var(--table-border-color);
  border-radius: 4px;
}

.table-toolbar {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--table-border-color);
}

.table-title {
  font-size: 16px;
  font-weight: 500;
}

.table-main {
  position: relative;
  overflow: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--table-font-size);
  color: var(--table-text-color);

  th, td {
    padding: 12px 16px;
    border-bottom: 1px solid var(--table-border-color);
    text-align: left;
  }

  th {
    background: var(--table-header-bg);
    font-weight: 500;
    white-space: nowrap;
  }

  tbody tr:hover {
    background: var(--table-row-hover-bg);
  }
}

.row-selected {
  background: var(--table-selected-row-bg);

  &:hover {
    background: var(--table-selected-row-bg);
  }
}

.selection-column {
  width: 40px;
  text-align: center;
}

.column-title {
  display: flex;
  align-items: center;
  gap: 4px;
}

.sort-icon {
  cursor: pointer;

  .active {
    fill: #1890ff;
  }
}

.column-filter {
  display: inline-flex;
  margin-left: 8px;

  button {
    border: none;
    background: none;
    padding: 2px;
    cursor: pointer;
    color: inherit;
  }
}

.empty-content {
  padding: 32px;
  text-align: center;
  color: #999;
}

.loading-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #1890ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.table-pagination {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--table-border-color);
}

.pagination-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pagination-btn {
  padding: 4px 12px;
  border: 1px solid var(--table-border-color);
  background: white;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    border-color: #1890ff;
    color: #1890ff;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> 