export default {
  props: {
    value: {},
  },
  data(){
    return {
      aa:true
    }
  },
  methods: {
    renderPPP(h, children) {
      if(this.aa){
        return h(
          "div",
          {
            ref: "elTable",
            props: {
              data: this.tableData,
            },
            on: {
              "click": () => {
                this.aa = !this.aa
              },
            },
          },
          'pppp'
        );
      }else{
        return h(
          "span",
          {
           
          },
          'qqqq'
        );
      }
      
    },
  },
  render(h) {
    return h(
      "div",
      {
        ref: "root",
      },
      [
        h("input", {
          domProps: {
            value: this.value,
          },
          on: {
            input: (e) => {
              this.$emit("input", e.target.value);
              this.$emit("kkkk");
            },
          },
        }),
        this.renderPPP(h)
      ]
    );
  },
};
