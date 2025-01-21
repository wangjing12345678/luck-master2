<template>
  <div>
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" prop="region" v-if="form.name">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间" v-if="false" prop="date">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="即时配送" prop="delivery">
      <el-cascader
        :props="props"
        v-model="form.delivery"
        :options="[
          { id: 1, label: 'ooo', value: '1' },
          { id: 2, label: 'fff', value: '2' },
        ]"
      ></el-cascader>
      <!-- <el-switch v-model="form.delivery"></el-switch> -->
    </el-form-item>
    <el-form-item label="活动性质" prop="type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源" prop="resource">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式" prop="desc">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: {
    form: {},
  },
  data() {
    let id = 0;
    let that = this;
    return {
      props: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node;
          if (node.data.id == 1) {
            setTimeout(() => {
              const nodes = [
                {
                  value: "2",
                  label: `选项3`,
                  leaf: true,
                },
              ];
              if (document.querySelectorAll(".el-cascader-menu")[1]) {
                document.querySelectorAll(".el-cascader-menu")[1].style.display = "block";
              }
              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
              resolve(nodes);
            }, 1000);
          } else {
            const nodes2 = [
              {
                value: undefined,
                label: undefined,
                leaf: true,
                disabled: true,
              },
            ];
            console.log(node.label);
            setTimeout(() => {
              that.$nextTick(() => {
                document.querySelectorAll(".el-cascader-node__label").forEach((x) => {
                  console.log(x.innerHTML);
                  if (x.innerHTML == node.label) {
                    console.log(x.parentNode);
                    x.parentNode.addEventListener("click", that.clsdh);
                    x.parentNode.dispatchEvent(new Event("click"));
                  }
                });
              });
            },2000);

            // console.log(document.querySelectorAll(".el-cascader-node__label"));
            // that.$set(node,'children',[])
            // console.log(document.querySelectorAll('.el-cascader-menu')[1])
            // document.querySelectorAll('.el-cascader-menu')[1].style.display = 'none'
            resolve([]);
          }
        },
      },
    };
  },
  methods: {
    clsdh() {
      console.log("fgrgg");
    },
  },
};
</script>

<style></style>
