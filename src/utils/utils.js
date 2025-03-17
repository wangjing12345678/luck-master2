/**
 * 计算一个数字是几位小数
 * */
export const getDecimalNumber = function (num) {
  if (typeof num === "number") {
    let numArr = num.toString().split(".");
    return numArr.length > 1 ? numArr[1].length : numArr.length;
  }
  return 0;
};
/**
 * 数字格式化
 * 参数说明：
 * @param number：要格式化的数字
 * @param decimals：保留4位小数
 * @param dec_point：小数点符号
 * @param thousands_sep：万分位符号
 * @param roundtag:舍入参数，默认 "ceil" 向上取,"floor"向下取,"round" 四舍五入
 * */
export const numberFormat = function (number, decimals = 0, dec_point, thousands_sep = "", roundtag = "ceil") {
  const divid = window?.globalConfig?.systemTemp?.amountDivided ? window?.globalConfig?.systemTemp?.amountDivided : 4;
  number = (number + "").replace(/[^0-9+-Ee.]/g, "");
  const n = !isFinite(+number) ? 0 : +number;
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  const sep = typeof thousands_sep === "undefined" ? "," : thousands_sep;
  const dec = typeof dec_point === "undefined" ? "." : dec_point;
  let s = "";
  const toFixedFix = function (n, prec) {
    const k = Math.pow(10, prec);
    return "" + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
  };
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  // 这里的数字是 4个数字加一个 ，/(-?\d+)(\d{})/
  const re = new RegExp("(-?\\d+)(\\d{" + divid + "})");
  if (sep) {
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, "$1" + sep + "$2");
    }
  }

  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
};
export const money = function (num) {
//   let decimalNumber = getDecimalNumber(num);
  return `${numberFormat(num, 0, ".", ",", "floor")}`;
};
