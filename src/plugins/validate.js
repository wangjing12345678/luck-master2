// 导入框架
import Schema from "element-ui/node_modules/async-validator";

// 身份证号码校验器
function validAny(rule, value, callback) {
  
  callback();
}

// 注册身份证号码校验器
Schema.register("typeAny", validAny);