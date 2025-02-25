<template>
  <div class="flex-container">
    <div v-for="(item, index) in items" :key="index" class="flex-item">
      <div class="item-content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "1",
          description: "oooo",
        },
        {
          title: "2",
          description: "oooo",
        },
        // {
        //   title: "3",
        //   description: "oooo",
        // },
        // {
        //   title: "4",
        //   description: "oooo",
        // },
        // {
        //   title: "5",
        //   description: "oooo",
        // },
        // {
        //   title: "6",
        //   description: "oooo",
        // },
        // {
        //   title: "7",
        //   description: "oooo",
        // },
        // {
        //   title: "8",
        //   description: "oooo",
        // },
      ],
    };
  },
  methods: {
    setData() {
      let result = [];
      let obj = [];
      this.items.forEach((item, index) => {
        obj.push(item);
        // console.log((index + 1) % 2);
        if ((index + 1) % 2 == 0) {
          result.push(obj);
          obj = [];
        }
        if (index == this.items.length - 1) {
          if (obj.length) {
            result.push(obj);
          }
        }
      });
    //   console.log(JSON.parse(JSON.stringify(result)));
    },
  },
  mounted() {
    switch ("") {
      // 不限制采购计划组织的选择范围。
      case "0":
        console.log(0);
        break;
      // 根据采购明细的组织形式确定采购计划组织形式的可选范围，优先级别：政府集中>部门集中>分散采购
      case "1":
        console.log(1);

        break;
      // 根据采购明细的组织形式按照最高的金额确定采购计划的唯一可选组织形式，金额相同的，按照优先级别：政府集中>部门集中>分散采购
      case "2":
        console.log(2);

        break;
      // 根据采购明细的组织形式按照优先级别明确采购计划的唯一可选组织形式，优先级别：政府集中>部门集中>分散采购
      case "3":
        console.log(3);

        break;
      // 采购明细中包含政府集中品目，则只能选择政府集中和部门集中；采购明细中不包含政府集中品目，则只能选择部门集中和分散采购
      case "4":
        console.log(4);
        break;

      default:
        console.log("default");

        break;
    }
    this.setData();
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.flex-item {
  flex: 0 0 calc(50% - 10px);
  min-height: 200px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  /* 内容布局 */
  display: flex;
  flex-direction: column;
}

.item-content {
  padding: 20px;
  flex: 1;

  /* 文本溢出处理 */
  overflow: hidden;
}

.item-content h3 {
  margin: 0 0 10px;
  font-size: 18px;
}

.item-content p {
  margin: 0;
  color: #666;

  /* 多行文本溢出 */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 响应式处理 */
@media (max-width: 768px) {
  .flex-item {
    flex: 0 0 100%;
  }
}
</style>
