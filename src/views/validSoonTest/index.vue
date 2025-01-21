<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="合同详情" name="first">
        <el-tabs v-model="jjj" @tab-click="handleClick2">
          <el-tab-pane label="基本信息" name="first"> </el-tab-pane>
          <el-tab-pane label="配置管理" name="second"></el-tab-pane>
        </el-tabs>
        <div>
          <el-row>
            <el-col :span="12"
              ><div class="grid-content bg-purple">
                <el-form ref="form" :model="form" label-width="80px" :rules="rules">
                  <form1 :form="form" v-show="jjj == 'first'"></form1>
                  <form2 :form="form" v-show="jjj == 'second'"></form2>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                    <el-button>取消</el-button>
                  </el-form-item>
                </el-form>
              </div></el-col
            >
            <el-col :span="12"
              ><div class="grid-content bg-purple-light">
                <div v-for="i in showRightArr" :key="i.id">
                  {{ i.name }}
                  {{ i.errorArr.length }}
                </div>
              </div></el-col
            >
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import a from './a.vue'
import form1 from "./form1.vue";
import form2 from "./form2.vue";
export default {
  components: {
    form1,
    form2,
  },
  data() {
    return {
      activeName: "first",
      jjj: "first",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        aaa: "",
        bbb: "",
      },
      moduleArr: [
        {
          name: "基本信息",
          id: "basic",
          num: 0,
          errorArr: [],
        },
        {
          name: "配置管理",
          id: "peizhi",
          num: 0,
          errorArr: [],
        },
      ],
      rulesConfig: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
          { customRequiredProp: "name", module: "basic" },
        ],
        region: [
          {
            required: true,
            message: "请输入活动名称",
            trigger: "blur",
          },
          { customRequiredProp: "region", customRequiredPropType: "length", module: "basic" },
        ],
        delivery: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { customRequiredProp: "delivery", module: "basic" },
        ],
        // delivery: [{ required: true, message: "请输入活动名称", trigger: "blur",  }],
        type: [
          {
            required: true,
            message: "请输入活动名称",
            trigger: "change",
          },
          {
            customRequiredProp: "type",
            customRequiredPropType: "length",
            module: "basic",
          },
        ],
        aaa: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { customRequiredProp: "aaa", module: "peizhi" },
        ],
        bbb: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { customRequiredProp: "bbb", module: "peizhi" },
        ],
      },

      requiredError: [],
    };
  },
  computed: {
    showRightArr() {
      const arr = JSON.parse(JSON.stringify(this.moduleArr));
      arr.forEach((x) => {
        this.requiredError.forEach((y) => {
          if (x.id == y.module) {
            x.errorArr.push(y);
          }
        });
      });
      return arr;
    },
    rules() {
      let result = {};
      const obj = JSON.parse(JSON.stringify(this.rulesConfig));
      for (let i in obj) {
        this.$set(result, i, []);
        for (let x = 0; x < obj[i].length; x++) {
          if (!obj[i][x].customRequiredProp) {
            result[i].push(obj[i][x]);
          }
        }
      }
      return result;
    },
  },
  watch: {
    form: {
      handler(val) {
        this.$nextTick(() => {
          const arr = this.$refs.form.fields.map((x) => x.prop);
          const requiredArr = [];
          for (let i in this.rules) {
            this.rulesConfig[i].forEach((y) => {
              if (y.customRequiredProp) {
                if (arr.includes(i)) {
                  requiredArr.push(y);
                }
              }
            });
          }
          this.checkRequired(requiredArr);
        });
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    checkRequired(requiredArr) {
      requiredArr.forEach((x) => {
        let flag = false;

        if (x.customRequiredPropType == "length") {
          if (this.form[x.customRequiredProp].length <= 0) {
            flag = true;
          }
        } else {
          if (this.form[x.customRequiredProp] === "") {
            flag = true;
          }
        }
        if (flag) {
          if (this.requiredError.findIndex((i) => i.customRequiredProp == x.customRequiredProp) < 0) {
            this.requiredError.push(x);
          }
        } else {
          this.requiredError = this.requiredError.filter((i) => i.customRequiredProp != x.customRequiredProp);
        }
      });
    },
    handleClick() {},
    handleClick2() {},
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });

      console.log(this.form);
    },
  },
};
</script>

<style></style>
