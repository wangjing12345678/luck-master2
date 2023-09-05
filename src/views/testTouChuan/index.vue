<template>
  <div>
    <div class="notice-area" style="padding:4px 8px"> <h2 class="text-center" style="font-size: 24px; text-align: center; margin-bottom: 20px; font-weight: bold"> XXXXXXXXXXXX需求调研公告名称XXXXXXXXXXXX </h2> <p class="notice-text" style="min-height:80px;font-size: 15px;text-indent: 28px; ">请输入</p> <div class="content" style="display:flex; justify-content: flex-end;align-items: center;"> <div class="wrap" style="min-width:350px;max-width:400px;font-size: 14px;"> <div class="contact-box" style="margin-bottom:8px;display:flex"> <span style="flex:1;padding-right:4px"><span>联系人：</span> <span class="person-text" style="word-break: break-all">XXX姓名</span></span> <span style="flex:1;padding-left:4px" ><span>联系方式：</span> <span class="phone-text" style="word-break: break-all">137XXXXXXXX</span></span > </div> <div class="address-box" style="margin-bottom:8px"> <span>联系地址：</span><span class="address-text" style="word-break: break-all"> XXXXXXXXXXXXXXXX地XXXXXXXXXXXXX</span> </div> <div class="unit-box" style="margin-bottom:8px"> <span>采购单位：</span><span class="unit-text" style="word-break: break-all">:XXXXXXXXXXXX单位名称XXXXXXXXXXXX</span> </div> </div> </div> </div>
    <div>
      ${context}
      <div class="notice-date" style="text-align:right;padding-right:8px;">${ 日期 }</div>
      <div class="annex-list" style="padding:4px 8px">
        <div style="text-indent: 28px;">附件信息：</div>
        <div style="text-indent: 56px;">
          <div
            style="color:#0000EE;cursor: pointer;margin-left:10px"
            onClick="const x = new window.XMLHttpRequest();x.open('GET', '${附件地址}', true); x.responseType = 'blob'; x.onload = () => { const url = window.URL.createObjectURL(x.response); const a = document.createElement('a'); a.href = url; a.download = '${附件名称}'; a.click(); }; x.send();"
          >
            {附件1}
          </div>
        </div>
      </div>
    </div>

    <!-- <Acom :ll="1" :pp="2" @oooo="hhhhh"></Acom> -->
    <!-- <div style="margin:2px 0"><a href="http://localhost:8080/psp-uploader/upload/commoninfo/2023/8/25/2c90872089d81793018a2c1f776f0059.png" download="http://localhost:8080/psp-uploader/upload/commoninfo/2023/8/25/2c90872089d81793018a2c1f776f0059.png">${ 附件名称1 }</a></div> -->
    <!-- <div style="margin:2px 0">
        <a
          download="国民经济行业分类.xlsx"
          href="http://localhost:8080/psp-uploader/upload/commoninfo/2023/8/24/2c90872089d81793018a269e0dd7003f.xlsx"
          target="_blank"
          >${ 附件名称2 }</a
        >
      </div> -->
  </div>
</template>

<script>
// import Acom from "./components/A.vue";
export default {
  // components: {
  //   Acom,
  // },
  // methods:{
  //   hhhhh(){
  //       console.log('透传')
  //   }
  // }
};
</script>

<style>
.aa {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  display: inline-block;
  cursor: pointer;
}
</style>
