export const pageStoreMixin = {
    data() {
      return {
        // 用于存储自动保存的定时器
        _saveTimer: null
      }
    },
  
    created() {
      // 组件创建时恢复数据
      this.restorePageData();
      // 添加页面关闭前的保存
      window.addEventListener('beforeunload', this.savePageData);
    },
  
    destroyed() {
      // 组件销毁时移除监听
      window.removeEventListener('beforeunload', this.savePageData);
      // 清除定时器
      if (this._saveTimer) {
        clearTimeout(this._saveTimer);
      }
    },
  
    watch: {
      // 监听整个组件的数据变化
      '$data': {
        handler: function() {
          // 使用防抖来避免频繁保存
          if (this._saveTimer) {
            clearTimeout(this._saveTimer);
          }
          this._saveTimer = setTimeout(() => {
            this.savePageData();
          }, 1000); // 1秒后保存
        },
        deep: true
      }
    },
  
    methods: {
      // 保存页面数据
      savePageData() {
        // 获取需要排除的字段
        const excludeKeys = ['_saveTimer'];
        
        // 过滤掉不需要保存的数据
        const saveData = {};

        Object.keys(this.$data).forEach(key => {
          if (!excludeKeys.includes(key)) {
            saveData[key] = this.$data[key];
          }
        });
        const storageData = {
          timestamp: new Date().getTime(),
          componentName: this.$options.name, // 组件名称
          data: saveData
        };
  
        localStorage.setItem(this.getStorageKey(), JSON.stringify(storageData));
      },
  
      // 恢复页面数据
      restorePageData() {
        const savedData = localStorage.getItem(this.getStorageKey());
        
        if (savedData) {
          try {
            const { timestamp, data } = JSON.parse(savedData);
            const saveTime = new Date(timestamp).toLocaleString();
            
            // 询问是否恢复数据
            if (confirm(`发现${saveTime}保存的数据，是否恢复？`)) {
              Object.keys(data).forEach(key => {
                // 只恢复组件中已定义的数据
                console.log(this.$data)
                console.log(key)
                if (this.$data.hasOwnProperty(key)) {
                    Object.assign(this[key],data[key])
                //   this.$set(this, key, data[key]);
                }
              });
            } else {
              // 如果不恢复，则清除存储的数据
              this.clearPageData();
            }
          } catch (error) {
            console.error('恢复数据失败:', error);
            this.clearPageData();
          }
        }
      },
  
      // 清除存储的数据
      clearPageData() {
        localStorage.removeItem(this.getStorageKey());
      },
  
      // 获取存储的key
      getStorageKey() {
        return `pageStore_${this.$options.name || 'unknown'}`;
      }
    }
  };