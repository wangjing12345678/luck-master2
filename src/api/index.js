import request from "@/utils/axios.js";
// 列表
export const getAllImplementType = (params) => {
  return request({
    url: `/admin/psp-admin/v1/system/function/getUserFunctionBySelf?_t=1737088734849`,
    method: "GET",
    params,
  });
};

export const getOptionListMapByGuids = (params) => {
  return request({
    url: `/admin/psp-admin/v1/system/optionList/getOptionListMapByGuids`,
    method: "GET",
    params,
  });
};
