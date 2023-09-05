<script>
import sonCom from "./sonCom";
import sonCom2 from "./sonCom2";

export default {
  render: function(createElement) {
    return createElement(
      "h" + this.level, // 标签名称
      {
        domProps: {
          // innerHTML: 'llll'
        },
      },
      [
        this.$slots.default,
        createElement(
          "son-com",
          {
            props: {
              items: "com1插槽", //这里就是用来给子组件传值的
            },
            scopedSlots: {
              somCom: (props) => createElement("span", props.items),
            },
          },
          [
            createElement("template", {
              slot: "somCom",
            }),
          ]
        ),
        createElement("son-com2", {
          props: {
            items: "1111", //这里就是用来给子组件传值的
          },
        }),
        "opppop",
        this.$scopedSlots.header
          ? this.$scopedSlots.header({
              text: "i am xutong",
            })
          : null,
      ]

      // this.$slots.default, // 子节点数组
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  components: {
    sonCom,
    sonCom2,
  },
};
</script>

<style scoped></style>
